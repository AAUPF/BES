import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPJointlyFunded5Component } from './udp-jointly-funded5.component';

describe('UDPJointlyFunded5Component', () => {
  let component: UDPJointlyFunded5Component;
  let fixture: ComponentFixture<UDPJointlyFunded5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPJointlyFunded5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPJointlyFunded5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
