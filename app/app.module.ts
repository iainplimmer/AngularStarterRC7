import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { BookDetailComponent } from './components/book-detail.component';
import { BookListComponent } from './components/book-list.component';
import { RatingComponent } from './components/rating.component';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    BookDetailComponent,
    BookListComponent,
    RatingComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
