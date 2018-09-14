import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureManagement1Component } from './expenditure-management1.component';

describe('ExpenditureManagement1Component', () => {
  let component: ExpenditureManagement1Component;
  let fixture: ComponentFixture<ExpenditureManagement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditureManagement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureManagement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
