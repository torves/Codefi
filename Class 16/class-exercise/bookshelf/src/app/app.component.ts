
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageDisplayed: string = 'bookshelf';
  title = 'book-it';

}

















// ngModel is two way binding
// onNavigatePage(page: string) {
//   this.pageDisplayed = page;
// }
// }
