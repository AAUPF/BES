import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkingWaterSupplyAndSanitationComponent } from './drinking-water-supply-and-sanitation.component';

describe('DrinkingWaterSupplyAndSanitationComponent', () => {
  let component: DrinkingWaterSupplyAndSanitationComponent;
  let fixture: ComponentFixture<DrinkingWaterSupplyAndSanitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkingWaterSupplyAndSanitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkingWaterSupplyAndSanitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
