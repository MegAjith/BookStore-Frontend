import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../shared/shared.module';
import { BooksComponent } from './books/books.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
    UserComponent,
    CategoriesComponent,
    BooksComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
