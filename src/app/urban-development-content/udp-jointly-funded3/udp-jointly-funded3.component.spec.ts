import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPJointlyFunded3Component } from './udp-jointly-funded3.component';

describe('UDPJointlyFunded3Component', () => {
  let component: UDPJointlyFunded3Component;
  let fixture: ComponentFixture<UDPJointlyFunded3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPJointlyFunded3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPJointlyFunded3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
