import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoralExpenditure2Component } from './sectoral-expenditure2.component';

describe('SectoralExpenditure2Component', () => {
  let component: SectoralExpenditure2Component;
  let fixture: ComponentFixture<SectoralExpenditure2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoralExpenditure2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoralExpenditure2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
