import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.serice';
import { Subscription } from "rxjs"

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  private bookChangeSub: Subscription = new Subscription();

  constructor(
    private bookshelfService: BookshelfService,
  ) { }

  ngOnInit(): void {
    this.bookChangeSub = this.bookshelfService.bookSelected.subscribe((data) => {
      console.log(data)
      alert(`title: ${data.title}\nauthor: ${data.author}`)
    })
  }

  ngOnDestroy() {
    this.bookChangeSub.unsubscribe();
  }

}
