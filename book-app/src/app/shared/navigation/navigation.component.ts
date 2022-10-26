import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  collapsed = true; // used to show/hide the mobile responsive menu
  show = true; // used to show/hide the settings dropdown menu

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  onSaveData() {
    this.httpService.saveBooksToFirebase()
  }

  onFetchData() {
    this.httpService.fetchBooksFromFirebase();
  }
}
