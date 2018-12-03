import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkingWaterSupplyAndSanitation4Component } from './drinking-water-supply-and-sanitation4.component';

describe('DrinkingWaterSupplyAndSanitation4Component', () => {
  let component: DrinkingWaterSupplyAndSanitation4Component;
  let fixture: ComponentFixture<DrinkingWaterSupplyAndSanitation4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkingWaterSupplyAndSanitation4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkingWaterSupplyAndSanitation4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
