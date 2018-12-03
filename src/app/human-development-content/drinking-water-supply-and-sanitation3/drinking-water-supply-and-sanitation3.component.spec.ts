import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkingWaterSupplyAndSanitation3Component } from './drinking-water-supply-and-sanitation3.component';

describe('DrinkingWaterSupplyAndSanitation3Component', () => {
  let component: DrinkingWaterSupplyAndSanitation3Component;
  let fixture: ComponentFixture<DrinkingWaterSupplyAndSanitation3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkingWaterSupplyAndSanitation3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkingWaterSupplyAndSanitation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
