import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormReactiveComponent } from './book-form-reactive/book-form-reactive.component';
import { BookFormTdComponent } from './book-form-td/book-form-td.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookshelfEditorComponent } from './bookshelf-editor/bookshelf-editor.component';
import { BookshelfHomeComponent } from './bookshelf-home/bookshelf-home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BookshelfComponent } from './bookshelf.component';
import { BookshelfRoutingModule } from './bookshelf-routing.module';

@NgModule({
  declarations: [
    BookshelfComponent,
    BookDetailsComponent,
    BookFormReactiveComponent,
    BookFormTdComponent,
    BookListComponent,
    BookshelfEditorComponent,
    BookshelfHomeComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, BookshelfRoutingModule],
  exports: [],
})
export class BookshelfModule {}
