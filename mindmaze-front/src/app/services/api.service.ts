import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category.model';
import { Card } from '../models/card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getCategoriesList(): Observable<Category[]> {
    return this.http.get<Category[]>(
      `${this.baseUrl}/categories`,
      this.httpOptions
    );
  }
  getCardList(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.baseUrl}/cards`, this.httpOptions);
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(
      `${this.baseUrl}/categories`,
      category,
      this.httpOptions
    );
  }
  createCard(card: Card): Observable<Card> {
    return this.http.post<Card>(
      `${this.baseUrl}/cards`,
      card,
      this.httpOptions
    );
  }
}
