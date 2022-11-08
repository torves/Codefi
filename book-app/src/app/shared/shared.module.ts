import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { NotificationComponent } from './notification/notification.component';
import { AuthComponent } from './auth/auth.component';
import { BookComponent } from './book/book.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlaceholderDirective } from './directives/placeholder.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlertComponent,
    AuthComponent,
    BookComponent,
    PlaceholderDirective,
    DropdownDirective,
    NavigationComponent,
    NotificationComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    AlertComponent,
    AuthComponent,
    BookComponent,
    PlaceholderDirective,
    DropdownDirective,
    NavigationComponent,
    NotificationComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
