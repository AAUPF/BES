import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDepartment3Component } from './tax-department3.component';

describe('TaxDepartment3Component', () => {
  let component: TaxDepartment3Component;
  let fixture: ComponentFixture<TaxDepartment3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxDepartment3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDepartment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
