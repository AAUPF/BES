import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositesAndCredits7Component } from './deposites-and-credits7.component';

describe('DepositesAndCredits7Component', () => {
  let component: DepositesAndCredits7Component;
  let fixture: ComponentFixture<DepositesAndCredits7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositesAndCredits7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositesAndCredits7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
