import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDepartment4Component } from './tax-department4.component';

describe('TaxDepartment4Component', () => {
  let component: TaxDepartment4Component;
  let fixture: ComponentFixture<TaxDepartment4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxDepartment4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDepartment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
