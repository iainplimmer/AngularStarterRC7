import { Component, Input } from '@angular/core';
import { Book } from './../types/book';
import { BookService } from './../services/book.service';

@Component({
  selector: 'rating',
  template: `
   <div>
        {{book.StarRating}}
        <button (click)="IncreaseRating()">+</button>
        <button (click)="DecreaseRating()">-</button>
   </div>
  `
})

export class RatingComponent {
    
    @Input()
    book: Book;
    
    constructor (private bookService: BookService) {

    }

    UpdateBook(): boolean {
        this.bookService.UpdateBook(this.book).then(function (response) {
            return response;
        });
    }

    IncreaseRating(): void {
        this.book.StarRating = this.book.StarRating + 1;
        this.UpdateBook();
    }

    DecreaseRating(): void {
        this.book.StarRating = this.book.StarRating - 1;
        this.UpdateBook();
    }
}