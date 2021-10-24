import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input()
  bookList: Book[] = []
  @Output()
  detailsRequest = new EventEmitter<Book>();
  constructor() { }

  ngOnInit(): void {
  }

}
