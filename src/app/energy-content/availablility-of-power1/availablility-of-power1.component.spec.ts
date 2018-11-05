import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablilityOfPower1Component } from './availablility-of-power1.component';

describe('AvailablilityOfPower1Component', () => {
  let component: AvailablilityOfPower1Component;
  let fixture: ComponentFixture<AvailablilityOfPower1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailablilityOfPower1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablilityOfPower1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
