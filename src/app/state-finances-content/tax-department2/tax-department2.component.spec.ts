import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDepartment2Component } from './tax-department2.component';

describe('TaxDepartment2Component', () => {
  let component: TaxDepartment2Component;
  let fixture: ComponentFixture<TaxDepartment2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxDepartment2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDepartment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
