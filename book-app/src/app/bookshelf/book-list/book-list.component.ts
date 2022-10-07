import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  myBooks: Book[] = [
    new Book(
      'Book of Testing',
      'James Woods',
      "Sci-Fi",
      'http://placekitten.com/g/400'
    ),
    new Book(
      'Book of Kittens',
      'Kitten Woods',
      "Kats",
      'http://placekitten.com/g/300'
    ),
    new Book(
      'More Cats',
      'James Woods',
      "Space Cats",
      'http://placekitten.com/g/200'
    ),
  ]

  @Output() currentSelectedBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  handleBookSelected(book: Book) {
    this.currentSelectedBook.emit(book)
  }

}
