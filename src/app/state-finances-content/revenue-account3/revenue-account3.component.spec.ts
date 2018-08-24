import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueAccount3Component } from './revenue-account3.component';

describe('RevenueAccount3Component', () => {
  let component: RevenueAccount3Component;
  let fixture: ComponentFixture<RevenueAccount3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueAccount3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueAccount3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
