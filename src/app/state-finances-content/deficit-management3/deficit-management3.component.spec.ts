import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeficitManagement3Component } from './deficit-management3.component';

describe('DeficitManagement3Component', () => {
  let component: DeficitManagement3Component;
  let fixture: ComponentFixture<DeficitManagement3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeficitManagement3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeficitManagement3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
