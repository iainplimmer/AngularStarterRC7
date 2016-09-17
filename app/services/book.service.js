"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.url = 'http://localhost:3001';
    }
    //  Service created to get a list of books from the mock database
    BookService.prototype.GetBooks = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Promise.reject(error.message || error);
        });
    };
    //  Let's first mock updating the book
    BookService.prototype.UpdateBook = function (book) {
        return this.http.post(this.url, book)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Promise.reject(error.message || error);
        });
    };
    BookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map