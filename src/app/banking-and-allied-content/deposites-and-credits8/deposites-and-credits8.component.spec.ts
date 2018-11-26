import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositesAndCredits8Component } from './deposites-and-credits8.component';

describe('DepositesAndCredits8Component', () => {
  let component: DepositesAndCredits8Component;
  let fixture: ComponentFixture<DepositesAndCredits8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositesAndCredits8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositesAndCredits8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
