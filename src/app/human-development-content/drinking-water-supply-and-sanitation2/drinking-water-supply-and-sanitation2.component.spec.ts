import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkingWaterSupplyAndSanitation2Component } from './drinking-water-supply-and-sanitation2.component';

describe('DrinkingWaterSupplyAndSanitation2Component', () => {
  let component: DrinkingWaterSupplyAndSanitation2Component;
  let fixture: ComponentFixture<DrinkingWaterSupplyAndSanitation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkingWaterSupplyAndSanitation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkingWaterSupplyAndSanitation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
