import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './../types/book';
import { BookService } from './../services/book.service';

@Component({
  selector: 'rating',
  templateUrl: './app/templates/rating.component.html'
})

export class RatingComponent {
    
    @Input() book: Book;
    @Output() ratingChange = new EventEmitter<any>();
    
    constructor (private bookService: BookService) {

    }

    UpdateBook(): void {        
        let that = this;
        this.bookService.UpdateBook(this.book).then(function (response) {
            that.ratingChange.emit('Rating changed OK');
        })
        .catch(function (error) {
            that.ratingChange.emit('There was an error and the rating was not altered.');
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
