import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonOfBudgetComponent } from './comparison-of-budget.component';

describe('ComparisonOfBudgetComponent', () => {
  let component: ComparisonOfBudgetComponent;
  let fixture: ComponentFixture<ComparisonOfBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisonOfBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonOfBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
