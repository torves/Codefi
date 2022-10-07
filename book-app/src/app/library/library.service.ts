import { Injectable, EventEmitter } from "@angular/core";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: "root",
})
export class LibraryService {
  bookListChanged = new EventEmitter<Book[]>();

  private allBooks: Book[] = [
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

  getBooks() {
    return this.allBooks.slice()
  }
}