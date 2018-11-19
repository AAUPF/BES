import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPJointlyFunded4Component } from './udp-jointly-funded4.component';

describe('UDPJointlyFunded4Component', () => {
  let component: UDPJointlyFunded4Component;
  let fixture: ComponentFixture<UDPJointlyFunded4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPJointlyFunded4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPJointlyFunded4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
