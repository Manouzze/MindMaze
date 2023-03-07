import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecardComponent } from './create-card.component';

describe('CreatecardComponent', () => {
  let component: CreatecardComponent;
  let fixture: ComponentFixture<CreatecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatecardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
