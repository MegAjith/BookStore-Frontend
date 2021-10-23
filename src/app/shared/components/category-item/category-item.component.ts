import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../services/category.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  @Input()
  category: Category = {
    CategoryId: 0,
    CategoryName: '',
    Description: '',
    Status: false,
    Position: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
