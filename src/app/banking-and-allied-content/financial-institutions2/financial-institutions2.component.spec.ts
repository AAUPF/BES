import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInstitutions2Component } from './financial-institutions2.component';

describe('FinancialInstitutions2Component', () => {
  let component: FinancialInstitutions2Component;
  let fixture: ComponentFixture<FinancialInstitutions2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialInstitutions2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialInstitutions2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
