import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingInfrastructure2Component } from './banking-infrastructure2.component';

describe('BankingInfrastructure2Component', () => {
  let component: BankingInfrastructure2Component;
  let fixture: ComponentFixture<BankingInfrastructure2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingInfrastructure2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingInfrastructure2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
