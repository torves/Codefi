import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.serice';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book = new Book('', '', '', '')
  @Output() bookSelected = new EventEmitter<void>();

  constructor(
    private bookshelfService: BookshelfService
  ) { }

  ngOnInit(): void {
  }

  onBookSelected() {
    // this.bookSelected.emit();
    this.bookshelfService.bookSelected.emit(this.book)
  }

}
