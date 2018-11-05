import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalAndFinancialStatus2Component } from './operational-and-financial-status2.component';

describe('OperationalAndFinancialStatus2Component', () => {
  let component: OperationalAndFinancialStatus2Component;
  let fixture: ComponentFixture<OperationalAndFinancialStatus2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationalAndFinancialStatus2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalAndFinancialStatus2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
