import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeSector2Component } from './bridge-sector2.component';

describe('BridgeSector2Component', () => {
  let component: BridgeSector2Component;
  let fixture: ComponentFixture<BridgeSector2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgeSector2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeSector2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
