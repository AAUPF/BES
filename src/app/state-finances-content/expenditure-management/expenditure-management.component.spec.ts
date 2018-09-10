import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureManagementComponent } from './expenditure-management.component';

describe('ExpenditureManagementComponent', () => {
  let component: ExpenditureManagementComponent;
  let fixture: ComponentFixture<ExpenditureManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditureManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
