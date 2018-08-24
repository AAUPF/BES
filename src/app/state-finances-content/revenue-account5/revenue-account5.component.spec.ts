import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueAccount5Component } from './revenue-account5.component';

describe('RevenueAccount5Component', () => {
  let component: RevenueAccount5Component;
  let fixture: ComponentFixture<RevenueAccount5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueAccount5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueAccount5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
