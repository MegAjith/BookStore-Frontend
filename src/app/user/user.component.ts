import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, BookService } from '../shared/services/book.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  bookList: Book[] = []

  constructor(private books: BookService) { }

  ngOnInit(): void {
    this.books.getList({ featured: true }).subscribe(
      value => this.bookList = value
    )
  }
}
