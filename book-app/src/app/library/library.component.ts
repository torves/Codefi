import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookshelfService } from '../bookshelf/bookshelf.serice';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit, OnDestroy {
  alert!: string;
  selectedBookSub!: Subscription;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.selectedBookSub = this.bookshelfService.bookSelected.subscribe(
      (book) => {
        // Show alert in modal
        this.alert = `Successfully added book: ${book.title} by ${book.author} to personal bookshelf!`;

        // After 4 seconds close the modal.
        setTimeout(this.handleCloseModal, 4000);
      }
    );
  }

  ngOnDestroy(): void {
    this.selectedBookSub.unsubscribe();
  }

  handleCloseModal() {
    this.alert = '';
  }
}
