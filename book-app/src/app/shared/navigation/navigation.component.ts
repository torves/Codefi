import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  collapsed = true; // used to show/hide the mobile responsive menu
  show = true; // used to show/hide the settings dropdown menu
  isAuthenticated = false;

  constructor(
    private httpService: HttpService,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    })
  }

  ngOnDestroy(): void {
    this.authService.currentUser.unsubscribe();
  }

  onSaveData() {
    this.httpService.saveBooksToFirebase()
  }

  onFetchData() {
    this.httpService.fetchBooksFromFirebase();
  }

  onSignOut() {
    this.authService.signout();
  }
}
