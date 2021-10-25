import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../services/book.service';
import { OrdersService } from '../../services/orders.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input()
  book!: Book;

  get isInWishList(){
    return this.wishList.indexOf(this.book) != -1;
  }

  constructor(public wishList: WishlistService,public orderService: OrdersService) { }

  ngOnInit(): void {
  }

}
