import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './../types/book';

@Component({
  selector: 'book-list',
  template: `
    <h2>{{title}}</h2>
    <h3 *ngIf="message">{{message}}</h3>
    <p *ngFor="let book of books">
        <a href="#" (click)="onSelect(book)">{{book.BookName}}</a>
        <rating [book]="book" (ratingChange)="onBookChange($event);"></rating>        
    </p>    
    <my-book-detail [book]="selectedBook" (detailChange)="onBookChange($event);"></my-book-detail>`  
})
export class BookListComponent implements OnInit {

    title = 'All the books';
    message = null;    
    selectedBook: Book;

    @Input() books: Book[];

    constructor() { }

    ngOnInit(): void {
        //  Any startup goes here if requires
    }

    onBookChange(notificationMessage: string) {
        this.message = notificationMessage;
    }

    onSelect(selectedBook: Book): void {
        this.selectedBook = selectedBook;
    }
}