import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAgroBasedIndustries5Component } from './non-agro-based-industries5.component';

describe('NonAgroBasedIndustries5Component', () => {
  let component: NonAgroBasedIndustries5Component;
  let fixture: ComponentFixture<NonAgroBasedIndustries5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAgroBasedIndustries5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAgroBasedIndustries5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
