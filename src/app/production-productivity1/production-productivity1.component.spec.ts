import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionProductivity1Component } from './production-productivity1.component';

describe('ProductionProductivity1Component', () => {
  let component: ProductionProductivity1Component;
  let fixture: ComponentFixture<ProductionProductivity1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionProductivity1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionProductivity1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
