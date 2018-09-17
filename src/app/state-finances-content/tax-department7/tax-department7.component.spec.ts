import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDepartment7Component } from './tax-department7.component';

describe('TaxDepartment7Component', () => {
  let component: TaxDepartment7Component;
  let fixture: ComponentFixture<TaxDepartment7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxDepartment7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDepartment7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
