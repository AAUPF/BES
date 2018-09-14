import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoralExpenditureComponent } from './sectoral-expenditure.component';

describe('SectoralExpenditureComponent', () => {
  let component: SectoralExpenditureComponent;
  let fixture: ComponentFixture<SectoralExpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoralExpenditureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoralExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
