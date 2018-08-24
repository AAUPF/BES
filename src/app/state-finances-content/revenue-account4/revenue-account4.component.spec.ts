import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueAccount4Component } from './revenue-account4.component';

describe('RevenueAccount4Component', () => {
  let component: RevenueAccount4Component;
  let fixture: ComponentFixture<RevenueAccount4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueAccount4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueAccount4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
