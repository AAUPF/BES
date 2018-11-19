import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPJointlyFunded8Component } from './udp-jointly-funded8.component';

describe('UDPJointlyFunded8Component', () => {
  let component: UDPJointlyFunded8Component;
  let fixture: ComponentFixture<UDPJointlyFunded8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPJointlyFunded8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPJointlyFunded8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
