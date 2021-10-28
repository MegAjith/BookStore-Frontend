import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book.service';
import { ToastService } from './toast.service';

export enum OrderStatus {
  IN_PROGRESS,
  PLACED,
  CANCELLED
}

export interface BookEntry {
  Book: Book,
  quantity?: number,
}

export interface Order {
  BookEntries: BookEntry[],
  OrderId: number,
  UserId: string,
  status: OrderStatus,
  address: string,
  price: number,
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  order?: Order = undefined;

  constructor(private http: HttpClient,private toastService: ToastService) {
    this.GetOrCreateOrder();
   }

  GetOrCreateOrder(){
    this.http.post<Order>("/api/Orders/",{}).subscribe(
      (value) => {
          this.order = value;
          if(!this.order.BookEntries)
            this.order.BookEntries = [];
        },
    )
  }

  AddBook(bookEntry: BookEntry){
    this.http.post<BookEntry>("/api/Cart",{
      BookId: bookEntry.Book.BookId,
      OrderId: this.order?.OrderId,
    }).subscribe(
      (value) => {
          this.order?.BookEntries.push(bookEntry);
          this.toastService.show({
            header: "Add to Cart",
            body: `Add ${bookEntry.quantity} of '${bookEntry.Book.Title}' to cart`
          });
        }
    )
  }

  RemoveBook(bookEntry: BookEntry){
    this.http.delete<BookEntry>(`/api/Cart/${this.order?.OrderId}/${bookEntry.Book.BookId}`).subscribe(
      (value) => {
        if(this.order){
          this.order.BookEntries = this.order?.BookEntries.filter(x => x.Book.BookId != bookEntry.Book.BookId);
          this.toastService.show({
            header: "Removed from Cart",
            body: `removed '${bookEntry.Book.Title}' from cart`
          });
        }
      }
    )
  }

  UpdateQuantity(bookEntry:  BookEntry){
    this.http.put<BookEntry>(`/api/Cart/${this.order?.OrderId}/${bookEntry.Book.BookId}`,{
      OrderId: this.order?.OrderId,
      BookId: bookEntry.Book.BookId,
      quantity:bookEntry.quantity,
    }).subscribe(
      (value) => {
        this.toastService.show({
          header: "Updated Cart",
          body: `Updated '${bookEntry.Book.Title}' to quantity: ${bookEntry.quantity}`
        });
      }
    )
  }

  updateAddress(order: Order){
    this.http.patch(`/api/Orders/${order.OrderId}`,{address:order.address}).subscribe(
      (value)=>{
        order.status = OrderStatus.PLACED;
        this.toastService.show({
          header: "Updated Address",
          body: `Updated address for Order: ${order.OrderId}`
        });
      }
    )
  }

  placeOrder(order: Order){
    this.http.patch(`/api/Orders/${order.OrderId}`,{status:OrderStatus.PLACED}).subscribe(
      (value)=>{
        order.status = OrderStatus.PLACED;
        this.toastService.show({
          header: "Order Placed",
          body: `Order: ${order.OrderId} placed!`
        });
        if(this.order?.OrderId == order.OrderId)
          this.GetOrCreateOrder();
      }
    )
  }
  ListOrder():any{
    return this.http.get<Order[]>(`/api/Orders/`)
  }

  cancelOrder(order: Order){
    this.http.patch(`/api/Orders/${order.OrderId}`,{status:OrderStatus.CANCELLED}).subscribe(
      (value)=>{
        order.status = OrderStatus.CANCELLED;
        this.toastService.show({
          header: "Order Cancelled",
          body: `Order: ${order.OrderId} cancelled!`
        });
      }
    )
  }
}
