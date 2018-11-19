import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPJointlyFunded1Component } from './udp-jointly-funded1.component';

describe('UDPJointlyFunded1Component', () => {
  let component: UDPJointlyFunded1Component;
  let fixture: ComponentFixture<UDPJointlyFunded1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPJointlyFunded1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPJointlyFunded1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
