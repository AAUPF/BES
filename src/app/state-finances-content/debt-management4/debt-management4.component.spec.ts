import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtManagement4Component } from './debt-management4.component';

describe('DebtManagement4Component', () => {
  let component: DebtManagement4Component;
  let fixture: ComponentFixture<DebtManagement4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtManagement4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtManagement4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
