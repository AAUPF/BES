import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueExpenditureComponent } from './revenue-expenditure.component';

describe('RevenueExpenditureComponent', () => {
  let component: RevenueExpenditureComponent;
  let fixture: ComponentFixture<RevenueExpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueExpenditureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
