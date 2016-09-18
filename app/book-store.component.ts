import { Component, OnInit } from '@angular/core';
import { Book } from './types/book';
import { BookService } from './services/book.service';

@Component({
  selector: 'book-store',
  template: `
    <h1>Express Bookstore! Based on Angular 2 QuickStart</h1>   
    <book-list [books]=books></book-list>
    `
})
export class BookStoreComponent implements OnInit {
  
  books: Book[];

  constructor(private bookService: BookService) { 

  }

  ngOnInit(): void {
    this.bookService.GetBooks().then(b => this.books = b);
  }

}
