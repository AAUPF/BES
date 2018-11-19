import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPStatePlan1Component } from './udp-state-plan1.component';

describe('UDPStatePlan1Component', () => {
  let component: UDPStatePlan1Component;
  let fixture: ComponentFixture<UDPStatePlan1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPStatePlan1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPStatePlan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
