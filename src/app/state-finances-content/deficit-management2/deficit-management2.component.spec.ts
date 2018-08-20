import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeficitManagement2Component } from './deficit-management2.component';

describe('DeficitManagement2Component', () => {
  let component: DeficitManagement2Component;
  let fixture: ComponentFixture<DeficitManagement2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeficitManagement2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeficitManagement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
