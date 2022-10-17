import { Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BookshelfService {
  private myBooks: Book[] = [
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

  bookSelected = new Subject<Book>();
  bookListChanged = new Subject<Book[]>();

  // Create
  saveBook(book: Book) {
    this.myBooks.push(book)
    this.bookListChanged.next(this.getBooks())
  }

  // Read
  getBooks() {
    return this.myBooks.slice()
  }

  getBook(idx: number) {
    return this.getBooks()[idx]
  }

  // Update TODO

  // Delete
  removeBook(idx: number) {
    if (idx !== -1) {
      this.myBooks.splice(idx, 1)
      this.bookListChanged.next(this.getBooks())
    }
  }
}