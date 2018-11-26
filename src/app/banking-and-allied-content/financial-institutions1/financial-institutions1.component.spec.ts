import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInstitutions1Component } from './financial-institutions1.component';

describe('FinancialInstitutions1Component', () => {
  let component: FinancialInstitutions1Component;
  let fixture: ComponentFixture<FinancialInstitutions1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialInstitutions1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialInstitutions1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
