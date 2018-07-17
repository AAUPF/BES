import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionProductivity13Component } from './production-productivity13.component';

describe('ProductionProductivity13Component', () => {
  let component: ProductionProductivity13Component;
  let fixture: ComponentFixture<ProductionProductivity13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionProductivity13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionProductivity13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
