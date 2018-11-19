import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPJointlyFunded10Component } from './udp-jointly-funded10.component';

describe('UDPJointlyFunded10Component', () => {
  let component: UDPJointlyFunded10Component;
  let fixture: ComponentFixture<UDPJointlyFunded10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPJointlyFunded10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPJointlyFunded10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
