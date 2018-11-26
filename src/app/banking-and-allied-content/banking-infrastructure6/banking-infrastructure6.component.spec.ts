import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingInfrastructure6Component } from './banking-infrastructure6.component';

describe('BankingInfrastructure6Component', () => {
  let component: BankingInfrastructure6Component;
  let fixture: ComponentFixture<BankingInfrastructure6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingInfrastructure6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingInfrastructure6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
