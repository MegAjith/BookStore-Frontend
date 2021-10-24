import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { RouterModule } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';



@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryItemComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CategoryListComponent,
    CategoryItemComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailsComponent
  ],
})
export class SharedModule { }
