import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionProductivity6Component } from './production-productivity6.component';

describe('ProductionProductivity6Component', () => {
  let component: ProductionProductivity6Component;
  let fixture: ComponentFixture<ProductionProductivity6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionProductivity6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionProductivity6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
