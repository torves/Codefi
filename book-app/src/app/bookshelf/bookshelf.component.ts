import {
  Component,
  ComponentFactoryResolver,
  createComponent,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/directives/placeholder.directive';
import { BookshelfService } from './bookshelf.serice';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
})
export class BookshelfComponent implements OnInit, OnDestroy {
  @ViewChild(PlaceholderDirective) alertHost: any;
  private closeModalSub!: Subscription;
  private bookSelectedSub!: Subscription;

  constructor(
    private bookshelfService: BookshelfService,
    private cmpFacResolver: ComponentFactoryResolver
  ) {
    //
  }

  ngOnInit(): void {
    this.bookSelectedSub = this.bookshelfService.bookSelected.subscribe(
      (book) => {
        const alertMsg = `Successfully removed book ${book.title} from your personal library.`;
        this.removeBookAlert(alertMsg);
      }
    );
  }

  ngOnDestroy(): void {
    this.bookSelectedSub.unsubscribe();
  }

  removeBookAlert(msg: string) {
    // createComponent(AlertComponent);
    const alertCompFactory =
      this.cmpFacResolver.resolveComponentFactory(AlertComponent);
    // alertCompFactory.create();

    const hostContainerRef = this.alertHost.viewContainerRef;
    hostContainerRef.clear();

    const compRef = hostContainerRef.createComponent(alertCompFactory);
    compRef.instance.alertMsg = msg;

    const clearAlert = () => {
      this.closeModalSub.unsubscribe();
      hostContainerRef.clear();
    };

    this.closeModalSub = compRef.instance.closeModal.subscribe(clearAlert);

    setTimeout(() => {
      if (this.closeModalSub) clearAlert();
    }, 3000);
  }

  handleCloseModal() {
    alert('Modal closed');
  }
}
