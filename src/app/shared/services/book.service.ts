import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';
import {Category} from './category.service';

export interface BookFilters {
  CategoryId?: number,
  status?: boolean,
  featured?: boolean,
  search?: string,
  [key: string]: string | number | boolean | undefined;
}

export interface Book {
  Category?: Category,
  BookId: number,
  Title: string
  ISBN?: string,
  Year?: number,
  Price?: number,
  Description: number,
  Position: number,
  Status: true,
  Image?: string,
  createdAt: string,
  CategoryId: number
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getList(filters: BookFilters) {
    let queryParams = new HttpParams();
    for (let key in filters) {
      queryParams = queryParams.set(key, filters[key]||"");
    }
    return this.http.get<Book[]>("api/Books", {
      params: queryParams
    }).pipe(
      catchError(err => of([]))
    )
  }
}
