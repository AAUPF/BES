import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueAccount2Component } from './revenue-account2.component';

describe('RevenueAccount2Component', () => {
  let component: RevenueAccount2Component;
  let fixture: ComponentFixture<RevenueAccount2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueAccount2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueAccount2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
