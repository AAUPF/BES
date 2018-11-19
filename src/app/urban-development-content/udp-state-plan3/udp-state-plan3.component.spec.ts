import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPStatePlan3Component } from './udp-state-plan3.component';

describe('UDPStatePlan3Component', () => {
  let component: UDPStatePlan3Component;
  let fixture: ComponentFixture<UDPStatePlan3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPStatePlan3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPStatePlan3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
