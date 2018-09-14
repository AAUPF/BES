import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDepartment6Component } from './tax-department6.component';

describe('TaxDepartment6Component', () => {
  let component: TaxDepartment6Component;
  let fixture: ComponentFixture<TaxDepartment6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxDepartment6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDepartment6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
