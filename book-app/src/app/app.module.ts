import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './shared/auth/auth-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { BookshelfModule } from './bookshelf/bookshelf.module';
import { LibraryModule } from './library/library.module';

@NgModule({
  declarations: [
    AppComponent,
    // These are now imported from separate sub-modules.
    // BookshelfComponent,
    // LibraryComponent,
    // BookListComponent,
    // BookDetailsComponent,
    // BookResultsComponent,
    // BookSearchComponent,
    // NavigationComponent,
    // BookComponent,
    // DropdownDirective,
    // BookshelfHomeComponent,
    // BookshelfEditorComponent,
    // NotificationComponent,
    // BookFormTdComponent,
    // BookFormReactiveComponent,
    // AuthComponent,
    // AlertComponent,
    // PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    BookshelfModule,
    LibraryModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
