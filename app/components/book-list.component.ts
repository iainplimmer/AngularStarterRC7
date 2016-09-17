import { Component, OnInit, Input } from '@angular/core';
import { Book } from './../types/book';

@Component({
  selector: 'book-list',
  template: `
    <h2>{{title}}</h2>
    <p *ngFor="let book of books">
        <a href="#" (click)="onSelect(book)">{{book.BookName}}</a>
        <rating [book]=book></rating>        
    </p>    
    <my-book-detail [book]="selectedBook"></my-book-detail>`  
})
export class BookListComponent implements OnInit {

    title = 'All the books';    
    selectedBook: Book;

    @Input()
    books: Book[];

    constructor() { }

    ngOnInit(): void {
        //  Any startup goes here if requires
    }
    
    onSelect(selectedBook: Book): void {
        this.selectedBook = selectedBook;
    }
}