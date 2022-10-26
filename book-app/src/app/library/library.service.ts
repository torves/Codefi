import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Book } from "../shared/book/book.model";

type BooksResponseObject = Object & {
  docs: any[];
}

@Injectable({
  providedIn: "root",
})
export class LibraryService {
  bookListChanged = new EventEmitter<Book[]>();

  private allBooks: Book[] = [
    // new Book(
    //   'Book of Testing',
    //   'James Woods',
    //   "Sci-Fi",
    //   'http://placekitten.com/g/400'
    // ),
    // new Book(
    //   'Book of Kittens',
    //   'Kitten Woods',
    //   "Kats",
    //   'http://placekitten.com/g/300'
    // ),
    // new Book(
    //   'More Cats',
    //   'James Woods',
    //   "Space Cats",
    //   'http://placekitten.com/g/200'
    // ),
  ]

  constructor(
    private http: HttpClient,
  ) {}

  getBooks() {
    return this.allBooks.slice()
  }

  fetchBooks(searchQuery: string) {
    const formattedQuery = searchQuery.split(' ').join('+').toLowerCase();

    this.http
      .get(`http://openlibrary.org/search.json?q=${formattedQuery}`)
      .subscribe((searchResponse) => {
        console.log('Search Response: ', searchResponse);
        this.allBooks = []
        this.saveBooks(searchResponse as BooksResponseObject)
      })
  }

  saveBooks(books: BooksResponseObject) {
    this.allBooks = books.docs.map((book) => {
      // TODO: transform the resonse data into our Book model object as expected.
      console.log({book})

      const { title, author_name, first_publish_year, isbn } = book

      // TODO: Get image path for the cover

      const newBook = new Book(
        title,
        author_name ? author_name[0] : '',
        'http://placekitten.com/g/300',
        '',
        0,
        first_publish_year,
        isbn ? isbn[0] : '',
      );

      console.log({newBook})

      return newBook
    })

    this.bookListChanged.next(this.getBooks());
  }
}