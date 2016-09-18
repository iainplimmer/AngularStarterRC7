import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './../types/book';

@Component({
  selector: 'book-list',
  templateUrl: './app/templates/book-list.component.html' 
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