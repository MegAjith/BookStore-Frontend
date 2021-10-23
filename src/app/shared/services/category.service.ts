import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Category {
  CategoryId: number,
  CategoryName: string,
  Description: string,
  Image?: string,
  Status: boolean,
  Position: number,
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<Category[]>('api/Categories').pipe(
      catchError(err => of([]))
    )
  }
}
