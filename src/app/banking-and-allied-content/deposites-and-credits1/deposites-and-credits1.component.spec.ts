import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositesAndCredits1Component } from './deposites-and-credits1.component';

describe('DepositesAndCredits1Component', () => {
  let component: DepositesAndCredits1Component;
  let fixture: ComponentFixture<DepositesAndCredits1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositesAndCredits1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositesAndCredits1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
