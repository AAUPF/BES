import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionProductivity7Component } from './production-productivity7.component';

describe('ProductionProductivity7Component', () => {
  let component: ProductionProductivity7Component;
  let fixture: ComponentFixture<ProductionProductivity7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionProductivity7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionProductivity7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
