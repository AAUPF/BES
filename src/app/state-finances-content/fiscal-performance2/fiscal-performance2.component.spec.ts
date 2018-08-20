import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalPerformance2Component } from './fiscal-performance2.component';

describe('FiscalPerformance2Component', () => {
  let component: FiscalPerformance2Component;
  let fixture: ComponentFixture<FiscalPerformance2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiscalPerformance2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalPerformance2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
