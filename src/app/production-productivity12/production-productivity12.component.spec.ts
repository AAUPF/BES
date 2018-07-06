import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionProductivity12Component } from './production-productivity12.component';

describe('ProductionProductivity12Component', () => {
  let component: ProductionProductivity12Component;
  let fixture: ComponentFixture<ProductionProductivity12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionProductivity12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionProductivity12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
