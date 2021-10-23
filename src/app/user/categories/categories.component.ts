import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoryList: Category[] = []

  constructor(private category: CategoryService) { }

  ngOnInit(): void {
    this.category.getList().subscribe(
      value => this.categoryList = value
    )
  }

}
