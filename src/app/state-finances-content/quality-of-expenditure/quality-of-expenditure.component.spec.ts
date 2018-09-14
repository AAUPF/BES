import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityOfExpenditureComponent } from './quality-of-expenditure.component';

describe('QualityOfExpenditureComponent', () => {
  let component: QualityOfExpenditureComponent;
  let fixture: ComponentFixture<QualityOfExpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityOfExpenditureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityOfExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
