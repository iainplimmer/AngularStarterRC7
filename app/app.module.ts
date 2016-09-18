import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BookStoreComponent }  from './book-store.component';
import { BookDetailComponent } from './components/book-detail.component';
import { BookListComponent } from './components/book-list.component';
import { RatingComponent } from './components/rating.component';
import { HttpModule }    from '@angular/http';
import { BookService } from './services/book.service';

@NgModule({
  //  Other modules whose exported classes are needed by component templates declared in this module.
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  //  The view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.
  declarations: [ 
    BookStoreComponent,
    BookDetailComponent,
    BookListComponent,
    RatingComponent
  ],
  //  NOTE: You can also include these in components too, but creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.
  providers: [
    BookService
  ],
  bootstrap: [ BookStoreComponent ]
})

// The export of AppComponent is just to show how to export; it isn't actually necessary in this example. A root module has no reason to export anything because other components don't need to import the root module.
export class AppModule { }
