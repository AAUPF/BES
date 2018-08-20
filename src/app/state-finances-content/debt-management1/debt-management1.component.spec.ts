import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtManagement1Component } from './debt-management1.component';

describe('DebtManagement1Component', () => {
  let component: DebtManagement1Component;
  let fixture: ComponentFixture<DebtManagement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtManagement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtManagement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
