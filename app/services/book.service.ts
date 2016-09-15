import { Injectable } from '@angular/core';
import { Book } from './../types/book';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {

    private url = 'http://localhost:3001';  

    constructor(private http: Http) { 

    }

    GetBooks(): Promise<Book[]> {
        return this.http.get(this.url)
            .toPromise()            
            .then(function (response) { 
                return response.json(); 
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
