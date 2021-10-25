import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Book } from './book.service';

interface BookGetResponse{
  Books: Book[],
}

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishList: Book[] = []

  constructor(private http: HttpClient) {
    this.getWishList();
  }

  indexOf(book: Book){
    return this.wishList.findIndex( value => value.BookId == book.BookId);
  }

  toggleBook(book: Book) {
    if (this.indexOf(book) != -1)
      this.removeBook(book);
    else
      this.addBook(book);
  }

  addBook(book: Book) {
    this.http.patch('/api/WishList/Add', { BookId: book.BookId }).subscribe(
      {
        complete: () => {
          this.wishList.push(book);
        }
      }
    )
  }

  removeBook(book: Book) {
    this.http.patch('/api/WishList/Remove', { BookId: book.BookId }).subscribe(
      {
        complete: () => {
          let index = this.indexOf(book);
          if (index != -1)
            this.wishList.splice(index, 1);
        }
      }
    )
  }

  getWishList() {
    this.http.get<BookGetResponse>('/api/WishList/').subscribe(
      {
        next: (value) => {
          this.wishList = value.Books;
        },
        error: () => {
          this.wishList = [];
        }
      }
    )
  }
}
