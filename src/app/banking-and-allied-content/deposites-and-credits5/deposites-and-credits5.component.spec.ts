import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositesAndCredits5Component } from './deposites-and-credits5.component';

describe('DepositesAndCredits5Component', () => {
  let component: DepositesAndCredits5Component;
  let fixture: ComponentFixture<DepositesAndCredits5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositesAndCredits5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositesAndCredits5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
