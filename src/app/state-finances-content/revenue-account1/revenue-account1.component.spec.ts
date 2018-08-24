import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueAccount1Component } from './revenue-account1.component';

describe('RevenueAccount1Component', () => {
  let component: RevenueAccount1Component;
  let fixture: ComponentFixture<RevenueAccount1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueAccount1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueAccount1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
