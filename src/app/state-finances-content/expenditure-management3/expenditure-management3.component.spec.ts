import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureManagement3Component } from './expenditure-management3.component';

describe('ExpenditureManagement3Component', () => {
  let component: ExpenditureManagement3Component;
  let fixture: ComponentFixture<ExpenditureManagement3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditureManagement3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureManagement3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
