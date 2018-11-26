import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositesAndCredits4Component } from './deposites-and-credits4.component';

describe('DepositesAndCredits4Component', () => {
  let component: DepositesAndCredits4Component;
  let fixture: ComponentFixture<DepositesAndCredits4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositesAndCredits4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositesAndCredits4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
