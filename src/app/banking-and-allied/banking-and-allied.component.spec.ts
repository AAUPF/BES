import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingAndAlliedComponent } from './banking-and-allied.component';

describe('BankingAndAlliedComponent', () => {
  let component: BankingAndAlliedComponent;
  let fixture: ComponentFixture<BankingAndAlliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingAndAlliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingAndAlliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
