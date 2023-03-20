import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from '../../models/category.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent implements OnInit {
  public createCategoryForm!: FormGroup;
  public createCategoryRequest?: Category;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.createCategoryForm = new FormGroup({
      name: new FormControl(),
    });
  }
  public submit(): void {
    this.createCategoryRequest = {
      name: this.createCategoryForm.get('name')?.value,
    };
    console.log(this.createCategoryForm, 'uuuuu');
    if (this.createCategoryRequest) {
      this.apiService
        .createCategory(this.createCategoryRequest)
        .subscribe(() => {
          console.log('success');
        });
    }
  }
}
