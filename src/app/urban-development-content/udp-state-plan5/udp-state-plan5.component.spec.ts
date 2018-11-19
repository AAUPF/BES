import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDPStatePlan5Component } from './udp-state-plan5.component';

describe('UDPStatePlan5Component', () => {
  let component: UDPStatePlan5Component;
  let fixture: ComponentFixture<UDPStatePlan5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDPStatePlan5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDPStatePlan5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
