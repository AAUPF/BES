import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionProductivity11Component } from './production-productivity11.component';

describe('ProductionProductivity11Component', () => {
  let component: ProductionProductivity11Component;
  let fixture: ComponentFixture<ProductionProductivity11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionProductivity11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionProductivity11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
