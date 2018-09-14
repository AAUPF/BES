import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoralExpenditure1Component } from './sectoral-expenditure1.component';

describe('SectoralExpenditure1Component', () => {
  let component: SectoralExpenditure1Component;
  let fixture: ComponentFixture<SectoralExpenditure1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoralExpenditure1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoralExpenditure1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
