import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPJointlyFunded9Component } from './udp-jointly-funded9.component';

describe('UDPJointlyFunded9Component', () => {
  let component: UDPJointlyFunded9Component;
  let fixture: ComponentFixture<UDPJointlyFunded9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPJointlyFunded9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPJointlyFunded9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
