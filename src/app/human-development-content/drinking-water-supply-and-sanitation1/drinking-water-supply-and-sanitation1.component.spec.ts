import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkingWaterSupplyAndSanitation1Component } from './drinking-water-supply-and-sanitation1.component';

describe('DrinkingWaterSupplyAndSanitation1Component', () => {
  let component: DrinkingWaterSupplyAndSanitation1Component;
  let fixture: ComponentFixture<DrinkingWaterSupplyAndSanitation1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkingWaterSupplyAndSanitation1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkingWaterSupplyAndSanitation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
