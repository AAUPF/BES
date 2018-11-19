import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPJointlyFunded7Component } from './udp-jointly-funded7.component';

describe('UDPJointlyFunded7Component', () => {
  let component: UDPJointlyFunded7Component;
  let fixture: ComponentFixture<UDPJointlyFunded7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPJointlyFunded7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPJointlyFunded7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
