import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDepartment5Component } from './tax-department5.component';

describe('TaxDepartment5Component', () => {
  let component: TaxDepartment5Component;
  let fixture: ComponentFixture<TaxDepartment5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxDepartment5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDepartment5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
