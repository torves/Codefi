import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BookshelfService } from '../bookshelf/bookshelf.serice';
import { exhaustMap, take, tap } from 'rxjs';
import { Book } from './book/book.model';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  firebaseRootURL: string =
    'https://codefi-bookit-app-default-rtdb.firebaseio.com/books.json';

  constructor(
    private http: HttpClient,
    private bookshelf: BookshelfService
  ) // private authService: AuthService,
  {
    console.log(this.firebaseRootURL);
  }

  saveBooksToFirebase() {
    const books = this.bookshelf.getBooks();
    this.http.put(this.firebaseRootURL, books).subscribe((res) => {
      console.log('Firebase DB Response: ', res);
    });
  }

  fetchBooksFromFirebase() {
    // return this.http
    //   .get(this.firebaseRootURL, {})
    //   .subscribe((res) => {
    //     this.bookshelf.setBooks(res as Book[])
    //   })

    // return this.authService.currentUser.pipe(
    //   take(1),
    //   exhaustMap((user) => {
    //     console.log(user);
    //     return this.http
    //       .get(this.firebaseRootURL, {
    //         // default initialization using '??'
    //         params: new HttpParams().set('auth', user?.token ?? "")
    //       })
    //       .pipe(
    //         tap((books: any) => {
    //           this.bookshelf.setBooks(books as Book[])
    //         })
    //       )
    //   })
    // )

    return this.http.get<Book[]>(this.firebaseRootURL, {}).pipe(
      tap((books) => {
        this.bookshelf.setBooks(books);
      })
    );
  }
}
