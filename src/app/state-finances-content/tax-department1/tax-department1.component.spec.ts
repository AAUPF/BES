import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDepartment1Component } from './tax-department1.component';

describe('TaxDepartment1Component', () => {
  let component: TaxDepartment1Component;
  let fixture: ComponentFixture<TaxDepartment1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxDepartment1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDepartment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
