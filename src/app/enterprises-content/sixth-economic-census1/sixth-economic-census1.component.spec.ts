import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthEconomicCensus1Component } from './sixth-economic-census1.component';

describe('SixthEconomicCensus1Component', () => {
  let component: SixthEconomicCensus1Component;
  let fixture: ComponentFixture<SixthEconomicCensus1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthEconomicCensus1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthEconomicCensus1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
