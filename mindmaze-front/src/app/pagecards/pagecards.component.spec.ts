import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecardsComponent } from './pagecards.component';

describe('PagecardsComponent', () => {
  let component: PagecardsComponent;
  let fixture: ComponentFixture<PagecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagecardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
