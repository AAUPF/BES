import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAgroBasedIndustries3Component } from './non-agro-based-industries3.component';

describe('NonAgroBasedIndustries3Component', () => {
  let component: NonAgroBasedIndustries3Component;
  let fixture: ComponentFixture<NonAgroBasedIndustries3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAgroBasedIndustries3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAgroBasedIndustries3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
