import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { BookshelfService } from '../bookshelf/bookshelf.serice';
import { tap } from "rxjs"
import { Book } from './book/book.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  firebaseRootURL: string = "https://codefi-bookit-app-default-rtdb.firebaseio.com/books.json";

  constructor(
    private http: HttpClient,
    private bookshelf: BookshelfService
  ) {
    console.log(this.firebaseRootURL)
  }

  saveBooksToFirebase() {
    const books = this.bookshelf.getBooks();
    this.http.put(this.firebaseRootURL, books).subscribe((res) => {
      console.log("Firebase DB Response: ", res);
    })
  }

  fetchBooksFromFirebase() {
    return this.http
      .get(this.firebaseRootURL, {})
      .subscribe((res) => {
        this.bookshelf.setBooks(res as Book[])
      })
  }


}
