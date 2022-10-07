import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  collapsed = true; // used to show/hide the mobile responsive menu
  show = true; // used to show/hide the settings dropdown menu

  @Output() currentPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectPage(page: string) {
    this.currentPage.emit(page)
  }

}
