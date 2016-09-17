import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './../types/book';

@Component({
  selector: 'my-book-detail',
  template: `
   <div *ngIf="book">
      <h2>
        {{book.BookName}} details! 
        <button (click)="ClearForm()">Close</button>
      </h2>
      <div><label>BookID </label>{{book.BookId}}</div>
      <div><label>Star Rating </label>{{book.StarRating}}</div>
      <div>
        <label>Book Name</label>
        <input [(ngModel)]="book.BookName" placeholder="name"/>
      </div>
      <div>
        <button (click)="SaveDetail()">Save</button>
      </div>
    </div>
  `
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
