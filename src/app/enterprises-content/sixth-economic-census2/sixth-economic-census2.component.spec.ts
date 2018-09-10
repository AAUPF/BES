import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthEconomicCensus2Component } from './sixth-economic-census2.component';

describe('SixthEconomicCensus2Component', () => {
  let component: SixthEconomicCensus2Component;
  let fixture: ComponentFixture<SixthEconomicCensus2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthEconomicCensus2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthEconomicCensus2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
