import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositesAndCredits2Component } from './deposites-and-credits2.component';

describe('DepositesAndCredits2Component', () => {
  let component: DepositesAndCredits2Component;
  let fixture: ComponentFixture<DepositesAndCredits2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositesAndCredits2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositesAndCredits2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
