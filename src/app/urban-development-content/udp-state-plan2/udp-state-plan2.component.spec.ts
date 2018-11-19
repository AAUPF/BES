import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPStatePlan2Component } from './udp-state-plan2.component';

describe('UDPStatePlan2Component', () => {
  let component: UDPStatePlan2Component;
  let fixture: ComponentFixture<UDPStatePlan2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPStatePlan2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPStatePlan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
