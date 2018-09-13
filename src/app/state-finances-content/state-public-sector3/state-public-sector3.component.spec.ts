import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePublicSector3Component } from './state-public-sector3.component';

describe('StatePublicSector3Component', () => {
  let component: StatePublicSector3Component;
  let fixture: ComponentFixture<StatePublicSector3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatePublicSector3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatePublicSector3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
