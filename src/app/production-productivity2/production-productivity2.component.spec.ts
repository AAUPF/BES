import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionProductivity2Component } from './production-productivity2.component';

describe('ProductionProductivity2Component', () => {
  let component: ProductionProductivity2Component;
  let fixture: ComponentFixture<ProductionProductivity2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionProductivity2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionProductivity2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
