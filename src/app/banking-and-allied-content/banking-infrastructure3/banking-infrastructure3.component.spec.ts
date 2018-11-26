import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingInfrastructure3Component } from './banking-infrastructure3.component';

describe('BankingInfrastructure3Component', () => {
  let component: BankingInfrastructure3Component;
  let fixture: ComponentFixture<BankingInfrastructure3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingInfrastructure3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingInfrastructure3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
