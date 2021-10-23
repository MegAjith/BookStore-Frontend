import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input()
  bookList: Book[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
