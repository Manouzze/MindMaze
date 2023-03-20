import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from '../../models/card.model';
import { Category } from '../../models/category.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreatecardComponent implements OnInit {
  public createCardForm!: FormGroup;
  public createCardRequest?: Card;
  public category: Category[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.createCardForm = new FormGroup({
      recto: new FormControl(),
      verso: new FormControl(),
      category: new FormControl(),
    });
    // Récupérer la liste des catégories depuis l'API
    this.apiService.getCategoriesList().subscribe((category: Category[]) => {
      this.category = category;
    });
  }

  public submit(): void {
    this.createCardRequest = {
      recto: this.createCardForm.get('recto')?.value,
      verso: this.createCardForm.get('verso')?.value,
      category: this.createCardForm.get('category')?.value,
    };
    console.log(this.createCardForm, 'uuuuu');
    if (this.createCardRequest) {
      this.apiService.createCard(this.createCardRequest).subscribe(() => {
        console.log('success');
      });
    }
  }
  // this.apiService.createCard().subscribe()
}
