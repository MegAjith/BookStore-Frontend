import { Component, OnInit } from '@angular/core';
import { Order, OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orderData: any;

  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {

    this.orderService.ListOrder()
    .subscribe((res:any)=>{
      this.orderData=res;
    }
    )
  }

}
