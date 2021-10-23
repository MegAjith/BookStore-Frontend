import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input()
  book: Book = {
    Category: undefined,
    BookId: 0,
    Title: '',
    Description: 0,
    Position: 0,
    Status: true,
    createdAt: '',
    CategoryId: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
