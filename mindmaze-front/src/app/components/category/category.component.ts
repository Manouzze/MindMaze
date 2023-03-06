import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories?: Category[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCategoriesList().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }
}
