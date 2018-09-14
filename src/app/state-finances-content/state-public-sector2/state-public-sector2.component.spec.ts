import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePublicSector2Component } from './state-public-sector2.component';

describe('StatePublicSector2Component', () => {
  let component: StatePublicSector2Component;
  let fixture: ComponentFixture<StatePublicSector2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatePublicSector2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatePublicSector2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
