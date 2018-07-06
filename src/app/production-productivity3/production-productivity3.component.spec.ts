import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionProductivity3Component } from './production-productivity3.component';

describe('ProductionProductivity3Component', () => {
  let component: ProductionProductivity3Component;
  let fixture: ComponentFixture<ProductionProductivity3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionProductivity3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionProductivity3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
