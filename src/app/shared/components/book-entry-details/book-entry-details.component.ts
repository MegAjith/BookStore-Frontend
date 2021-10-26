import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { BookEntry } from '../../services/orders.service';

@Component({
  selector: 'app-book-entry-details',
  templateUrl: './book-entry-details.component.html',
  styleUrls: ['./book-entry-details.component.scss']
})
export class BookEntryDetailsComponent implements OnInit {

  @Input()
  bookEntry!: BookEntry;

  quantityChanged = new Subject<number>();

  @Output()
  onQuantityChanged = new EventEmitter<BookEntry>();

  @Output()
  onRemove = new EventEmitter<BookEntry>();

  constructor() { }

  ngOnInit(): void {
    this.quantityChanged.pipe(
      debounceTime(1000),
    ).subscribe(
      (value) => {
        this.bookEntry.quantity = value;
        this.onQuantityChanged.emit(this.bookEntry);
      }
    )
  }

}
