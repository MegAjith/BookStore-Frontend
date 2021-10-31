import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../shared/shared.module';
import { BooksComponent } from './books/books.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrdersComponent } from './orders/orders.component';
import { FormsModule } from '@angular/forms';
import { OrderListComponent } from './order-list/order-list.component';



@NgModule({
  declarations: [
    UserComponent,
    CategoriesComponent,
    BooksComponent,
    WishlistComponent,
    OrdersComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    
  ]
})
export class UserModule { }
