import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtManagement3Component } from './debt-management3.component';

describe('DebtManagement3Component', () => {
  let component: DebtManagement3Component;
  let fixture: ComponentFixture<DebtManagement3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtManagement3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtManagement3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
