import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalAndFinancialStatus1Component } from './operational-and-financial-status1.component';

describe('OperationalAndFinancialStatus1Component', () => {
  let component: OperationalAndFinancialStatus1Component;
  let fixture: ComponentFixture<OperationalAndFinancialStatus1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationalAndFinancialStatus1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalAndFinancialStatus1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
