import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionProductivity8Component } from './production-productivity8.component';

describe('ProductionProductivity8Component', () => {
  let component: ProductionProductivity8Component;
  let fixture: ComponentFixture<ProductionProductivity8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionProductivity8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionProductivity8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
