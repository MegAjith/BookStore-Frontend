import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Book } from './book.service';
import { ToastService } from './toast.service';

interface BookGetResponse{
  Books: Book[],
}

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishList: Book[] = []

  constructor(private http: HttpClient,private toastService: ToastService) {
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
          this.toastService.show({
            header: `Add to Wishlist`,
            body: `${book.Title} was added to wishlist`,
          });
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
          this.toastService.show({
              header: `Remove from Wishlist`,
              body: `${book.Title} was removed from wishlist`,
            });
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
