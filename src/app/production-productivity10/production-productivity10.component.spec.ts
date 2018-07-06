import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionProductivity10Component } from './production-productivity10.component';

describe('ProductionProductivity10Component', () => {
  let component: ProductionProductivity10Component;
  let fixture: ComponentFixture<ProductionProductivity10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionProductivity10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionProductivity10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
