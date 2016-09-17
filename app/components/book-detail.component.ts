import { Component, Input } from '@angular/core';
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
      <div>
        <label>Book Name</label>
        <input [(ngModel)]="book.BookName" placeholder="name"/>
      </div>
    </div>
  `
})

export class BookDetailComponent {
  @Input()
  book: Book;

  ClearForm(): void {
   this.book = null;
  }
}
