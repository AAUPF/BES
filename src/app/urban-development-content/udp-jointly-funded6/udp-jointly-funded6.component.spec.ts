import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPJointlyFunded6Component } from './udp-jointly-funded6.component';

describe('UDPJointlyFunded6Component', () => {
  let component: UDPJointlyFunded6Component;
  let fixture: ComponentFixture<UDPJointlyFunded6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPJointlyFunded6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPJointlyFunded6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
