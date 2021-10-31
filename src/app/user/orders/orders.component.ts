import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { BookEntry, OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  addressChanged = new Subject<string>();

  constructor(public orderService: OrdersService,private router:Router) {
    this.addressChanged.pipe(
      debounceTime(1000),
    ).subscribe(
      (value)=>{
        if(orderService.order){
          orderService.order.address = value;
          orderService.updateAddress(orderService.order);
        }
        
      }
    )
   }

  get totalMRP(){
    let price = 0.0;
    if(!this.orderService.order)
      return 0.00;
    for(let bookEntry of this.orderService.order?.BookEntries)
    {
      price += (bookEntry.quantity||0) * (bookEntry.Book.Price||0)
    }
    return price;
  }

  get discountAmount(){
    let price = this.totalMRP;
    if(this.orderService.order)
      return price * 0.1;
    return 0;
  }
  


  ngOnInit(): void {
  }
  onClick(){
    if(this.orderService.order)
    {
    this.router.navigate(['/user/OrderList']);
    this.orderService.placeOrder(this.orderService.order)
    
    }
  }

  
}
