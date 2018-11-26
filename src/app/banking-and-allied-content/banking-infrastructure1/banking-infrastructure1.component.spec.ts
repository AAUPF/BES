import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingInfrastructure1Component } from './banking-infrastructure1.component';

describe('BankingInfrastructure1Component', () => {
  let component: BankingInfrastructure1Component;
  let fixture: ComponentFixture<BankingInfrastructure1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingInfrastructure1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingInfrastructure1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
