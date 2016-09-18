import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './../types/book';

@Component({
  selector: 'my-book-detail',
  templateUrl: './app/templates/book-detail.component.html'
})

export class BookDetailComponent {
  @Input() book: Book;
  @Output() detailChange = new EventEmitter<any>();

  SaveDetail(): void {
    this.detailChange.emit('Book Data Saved.');
  }

  ResetDetail(): void {
    //   Todo
  }

  ClearForm(): void {
   this.book = null;
  }
}
