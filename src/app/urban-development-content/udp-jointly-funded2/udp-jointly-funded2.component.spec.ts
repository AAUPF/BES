import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPJointlyFunded2Component } from './udp-jointly-funded2.component';

describe('UDPJointlyFunded2Component', () => {
  let component: UDPJointlyFunded2Component;
  let fixture: ComponentFixture<UDPJointlyFunded2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPJointlyFunded2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPJointlyFunded2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
