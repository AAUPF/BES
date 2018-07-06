import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionAndProductivity6Component } from './production-and-productivity6.component';

describe('ProductionAndProductivity6Component', () => {
  let component: ProductionAndProductivity6Component;
  let fixture: ComponentFixture<ProductionAndProductivity6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionAndProductivity6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionAndProductivity6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
