import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonOfBudget1Component } from './comparison-of-budget1.component';

describe('ComparisonOfBudget1Component', () => {
  let component: ComparisonOfBudget1Component;
  let fixture: ComponentFixture<ComparisonOfBudget1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisonOfBudget1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonOfBudget1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
