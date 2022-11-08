import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookshelfComponent } from './bookshelf.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { BookshelfHomeComponent } from './bookshelf-home/bookshelf-home.component';
import { BookshelfEditorComponent } from './bookshelf-editor/bookshelf-editor.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes = [
  {
    path: '',
    component: BookshelfComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: BookshelfHomeComponent },
      { path: 'new', component: BookshelfEditorComponent },
      { path: ':id', component: BookDetailsComponent },
      { path: ':id/edit', component: BookshelfEditorComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookshelfRoutingModule {}
