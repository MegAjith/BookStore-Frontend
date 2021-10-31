import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order, BookEntry, OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orderData: any;

  constructor(public orderService: OrdersService, private router: Router) {
    this.orderService.ListOrder()
      .subscribe((res: any) => {
        this.orderData = res;
      }

      )
  }

  ngOnInit(): void {



  }
  goToBookStore() {
    this.router.navigateByUrl('/user');






  }

}
