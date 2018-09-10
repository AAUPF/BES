import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiharIndustrialInvestment1Component } from './bihar-industrial-investment1.component';

describe('BiharIndustrialInvestment1Component', () => {
  let component: BiharIndustrialInvestment1Component;
  let fixture: ComponentFixture<BiharIndustrialInvestment1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiharIndustrialInvestment1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiharIndustrialInvestment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
