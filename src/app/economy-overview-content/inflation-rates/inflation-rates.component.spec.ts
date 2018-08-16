import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InflationRatesComponent } from './inflation-rates.component';

describe('InflationRatesComponent', () => {
  let component: InflationRatesComponent;
  let fixture: ComponentFixture<InflationRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InflationRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InflationRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
