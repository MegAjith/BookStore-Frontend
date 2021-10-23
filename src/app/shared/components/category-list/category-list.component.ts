import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  @Input()
  categoryList: Category[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
