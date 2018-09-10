import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiharIndustrialInvestment2Component } from './bihar-industrial-investment2.component';

describe('BiharIndustrialInvestment2Component', () => {
  let component: BiharIndustrialInvestment2Component;
  let fixture: ComponentFixture<BiharIndustrialInvestment2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiharIndustrialInvestment2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiharIndustrialInvestment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
