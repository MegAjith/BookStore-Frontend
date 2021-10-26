import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEntryDetailsComponent } from './book-entry-details.component';

describe('BookEntryDetailsComponent', () => {
  let component: BookEntryDetailsComponent;
  let fixture: ComponentFixture<BookEntryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookEntryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEntryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
