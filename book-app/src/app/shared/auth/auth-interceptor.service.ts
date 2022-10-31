import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap } from "rxjs";
import { AuthService } from "./auth.service";
import { take } from "rxjs"

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
  ) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.currentUser.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) return next.handle(req);
        // Modify request
        const modifiedReq = req.clone({
          params: new HttpParams().set("auth", user.token),
        })
        return next.handle(modifiedReq);
      })
    )
  }
}