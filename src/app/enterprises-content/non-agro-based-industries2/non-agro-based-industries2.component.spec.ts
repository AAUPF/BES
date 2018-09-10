import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAgroBasedIndustries2Component } from './non-agro-based-industries2.component';

describe('NonAgroBasedIndustries2Component', () => {
  let component: NonAgroBasedIndustries2Component;
  let fixture: ComponentFixture<NonAgroBasedIndustries2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAgroBasedIndustries2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAgroBasedIndustries2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
