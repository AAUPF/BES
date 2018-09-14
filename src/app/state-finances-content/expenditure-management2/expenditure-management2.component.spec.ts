import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureManagement2Component } from './expenditure-management2.component';

describe('ExpenditureManagement2Component', () => {
  let component: ExpenditureManagement2Component;
  let fixture: ComponentFixture<ExpenditureManagement2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditureManagement2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureManagement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
