import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  selectedBook: Book = new Book('', '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
