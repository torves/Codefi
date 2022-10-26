import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private library: LibraryService,
  ) { }

  ngOnInit(): void {
  }

  onFetchBooks(searchQuery: string) {
    this.library.fetchBooks(searchQuery);
    // console.log("Fetch Books")
    // console.log({searchQuery})

    // const formattedQuery = searchQuery.split(' ').join('+').toLowerCase();


    // this.http
    //   .get(`http://openlibrary.org/search.json?q=${formattedQuery}`)
    //   .subscribe((searchResponse) => {
    //     console.log('Search Response: ', searchResponse);
    //   })
  }

}
