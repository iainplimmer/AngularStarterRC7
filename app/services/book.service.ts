import { Injectable } from '@angular/core';
import { Book } from './../types/book';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {

    private url = 'http://localhost:3001';  

    constructor(private http: Http) { 

    }

    //  Service created to get a list of books from the mock database
    GetBooks(): Promise<Book[]> {
        return this.http.get(this.url)
            .toPromise()            
            .then(function (response) { 
                return response.json(); 
            })
            .catch(function (error) {
                return Promise.reject(error.message || error);
            });
    }

    //  Let's first mock updating the book
    UpdateBook(book: Book): Promise<boolean> {
        return this.http.post(this.url, book)
            .toPromise()            
            .then(function (response) { 
                return response.json(); 
            })
            .catch(function (error) {
                return Promise.reject(error.message || error);
            });
    }
}
