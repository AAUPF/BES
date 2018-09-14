import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureOnSalaryAndPensionComponent } from './expenditure-on-salary-and-pension.component';

describe('ExpenditureOnSalaryAndPensionComponent', () => {
  let component: ExpenditureOnSalaryAndPensionComponent;
  let fixture: ComponentFixture<ExpenditureOnSalaryAndPensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditureOnSalaryAndPensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureOnSalaryAndPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
