import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositesAndCredits3Component } from './deposites-and-credits3.component';

describe('DepositesAndCredits3Component', () => {
  let component: DepositesAndCredits3Component;
  let fixture: ComponentFixture<DepositesAndCredits3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositesAndCredits3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositesAndCredits3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
