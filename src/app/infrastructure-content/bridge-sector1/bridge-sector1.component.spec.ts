import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeSector1Component } from './bridge-sector1.component';

describe('BridgeSector1Component', () => {
  let component: BridgeSector1Component;
  let fixture: ComponentFixture<BridgeSector1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgeSector1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeSector1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
