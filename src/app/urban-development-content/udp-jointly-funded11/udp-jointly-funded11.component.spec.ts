import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPJointlyFunded11Component } from './udp-jointly-funded11.component';

describe('UDPJointlyFunded11Component', () => {
  let component: UDPJointlyFunded11Component;
  let fixture: ComponentFixture<UDPJointlyFunded11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPJointlyFunded11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPJointlyFunded11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
