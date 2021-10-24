import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'Category', component: CategoriesComponent },
  { path:'Books', component: BooksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
