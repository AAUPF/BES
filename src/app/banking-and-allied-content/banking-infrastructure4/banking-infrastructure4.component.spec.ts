import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingInfrastructure4Component } from './banking-infrastructure4.component';

describe('BankingInfrastructure4Component', () => {
  let component: BankingInfrastructure4Component;
  let fixture: ComponentFixture<BankingInfrastructure4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingInfrastructure4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingInfrastructure4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
