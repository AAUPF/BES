import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablilityOfPower2Component } from './availablility-of-power2.component';

describe('AvailablilityOfPower2Component', () => {
  let component: AvailablilityOfPower2Component;
  let fixture: ComponentFixture<AvailablilityOfPower2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailablilityOfPower2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablilityOfPower2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
