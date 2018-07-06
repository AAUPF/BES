import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionProductivity4Component } from './production-productivity4.component';

describe('ProductionProductivity4Component', () => {
  let component: ProductionProductivity4Component;
  let fixture: ComponentFixture<ProductionProductivity4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionProductivity4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionProductivity4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
