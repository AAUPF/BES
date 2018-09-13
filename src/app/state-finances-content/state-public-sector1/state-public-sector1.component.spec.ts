import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePublicSector1Component } from './state-public-sector1.component';

describe('StatePublicSector1Component', () => {
  let component: StatePublicSector1Component;
  let fixture: ComponentFixture<StatePublicSector1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatePublicSector1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatePublicSector1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
