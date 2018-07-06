import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionProductivity9Component } from './production-productivity9.component';

describe('ProductionProductivity9Component', () => {
  let component: ProductionProductivity9Component;
  let fixture: ComponentFixture<ProductionProductivity9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionProductivity9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionProductivity9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
