import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalPerformance1Component } from './fiscal-performance1.component';

describe('FiscalPerformance1Component', () => {
  let component: FiscalPerformance1Component;
  let fixture: ComponentFixture<FiscalPerformance1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiscalPerformance1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalPerformance1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
