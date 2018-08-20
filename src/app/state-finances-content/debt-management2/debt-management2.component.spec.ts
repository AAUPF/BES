import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtManagement2Component } from './debt-management2.component';

describe('DebtManagement2Component', () => {
  let component: DebtManagement2Component;
  let fixture: ComponentFixture<DebtManagement2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtManagement2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtManagement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
