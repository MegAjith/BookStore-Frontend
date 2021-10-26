import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input()
  book: Book = {
    Author: '',
    Category: undefined,
    BookId: 0,
    Title: '',
    Description: 0,
    Position: 0,
    Status: true,
    createdAt: '',
    CategoryId: 0
  };

  @Output()
  detailsRequest = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

}
