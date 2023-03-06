import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Card } from 'src/app/models/card.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cards?: Card[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCardList().subscribe((cards: Card[]) => {
      this.cards = cards;
    });
  }

  isFlipped = false;

  returnCard() {
    this.isFlipped = !this.isFlipped;
    // console.log('Hello returnCard()');
  }
}
