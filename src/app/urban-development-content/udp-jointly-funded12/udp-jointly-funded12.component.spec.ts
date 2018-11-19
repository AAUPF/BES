import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPJointlyFunded12Component } from './udp-jointly-funded12.component';

describe('UDPJointlyFunded12Component', () => {
  let component: UDPJointlyFunded12Component;
  let fixture: ComponentFixture<UDPJointlyFunded12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPJointlyFunded12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPJointlyFunded12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
