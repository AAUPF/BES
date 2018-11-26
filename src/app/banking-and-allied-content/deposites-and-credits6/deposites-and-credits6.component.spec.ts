import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositesAndCredits6Component } from './deposites-and-credits6.component';

describe('DepositesAndCredits6Component', () => {
  let component: DepositesAndCredits6Component;
  let fixture: ComponentFixture<DepositesAndCredits6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositesAndCredits6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositesAndCredits6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
