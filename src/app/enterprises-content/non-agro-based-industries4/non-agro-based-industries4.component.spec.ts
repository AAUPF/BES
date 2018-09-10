import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAgroBasedIndustries4Component } from './non-agro-based-industries4.component';

describe('NonAgroBasedIndustries4Component', () => {
  let component: NonAgroBasedIndustries4Component;
  let fixture: ComponentFixture<NonAgroBasedIndustries4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAgroBasedIndustries4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAgroBasedIndustries4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
