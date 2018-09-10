import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAgroBasedIndustries1Component } from './non-agro-based-industries1.component';

describe('NonAgroBasedIndustries1Component', () => {
  let component: NonAgroBasedIndustries1Component;
  let fixture: ComponentFixture<NonAgroBasedIndustries1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAgroBasedIndustries1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAgroBasedIndustries1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
