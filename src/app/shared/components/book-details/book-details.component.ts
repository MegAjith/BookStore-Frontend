import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input()
  book!: Book;

  @Output()
  close = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

}
