import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialPosition1Component } from './financial-position1.component';

describe('FinancialPosition1Component', () => {
  let component: FinancialPosition1Component;
  let fixture: ComponentFixture<FinancialPosition1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialPosition1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialPosition1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
