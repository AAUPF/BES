import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeficitManagement1Component } from './deficit-management1.component';

describe('DeficitManagement1Component', () => {
  let component: DeficitManagement1Component;
  let fixture: ComponentFixture<DeficitManagement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeficitManagement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeficitManagement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
