import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPStatePlan4Component } from './udp-state-plan4.component';

describe('UDPStatePlan4Component', () => {
  let component: UDPStatePlan4Component;
  let fixture: ComponentFixture<UDPStatePlan4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPStatePlan4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPStatePlan4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
