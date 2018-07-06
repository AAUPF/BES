import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionProductivity5Component } from './production-productivity5.component';

describe('ProductionProductivity5Component', () => {
  let component: ProductionProductivity5Component;
  let fixture: ComponentFixture<ProductionProductivity5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionProductivity5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionProductivity5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
