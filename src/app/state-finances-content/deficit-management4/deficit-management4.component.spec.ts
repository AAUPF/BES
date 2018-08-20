import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeficitManagement4Component } from './deficit-management4.component';

describe('DeficitManagement4Component', () => {
  let component: DeficitManagement4Component;
  let fixture: ComponentFixture<DeficitManagement4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeficitManagement4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeficitManagement4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
