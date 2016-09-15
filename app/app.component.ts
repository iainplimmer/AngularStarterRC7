import { Component, OnInit } from '@angular/core';
import { Book } from './types/book';
import { BookService } from './services/book.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Books</h2>
    <ul>
      <li *ngFor="let book of books"
        [class.selected]="book === selectedBook"
        (click)="onSelect(book)">
        <span class="badge">{{book.BookId}}</span> {{book.BookName}}
      </li>
    </ul>
    <my-book-detail [book]="selectedBook"></my-book-detail>
  `,
  providers: [BookService]
})
export class AppComponent implements OnInit {
  
  title = 'I love book';
  books: Book[];
  selectedBook: Book;
  
  constructor(private bookService: BookService) { }
  
  ngOnInit(): void {
    this.bookService.GetBooks().then(b => this.books = b);
  }
  onSelect(selectedBook: Book): void {
    this.selectedBook = selectedBook;
  }
}
