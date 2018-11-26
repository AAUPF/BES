import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingInfrastructure5Component } from './banking-infrastructure5.component';

describe('BankingInfrastructure5Component', () => {
  let component: BankingInfrastructure5Component;
  let fixture: ComponentFixture<BankingInfrastructure5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingInfrastructure5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingInfrastructure5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
