import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanchayatiRaj1Component } from './panchayati-raj1.component';

describe('PanchayatiRaj1Component', () => {
  let component: PanchayatiRaj1Component;
  let fixture: ComponentFixture<PanchayatiRaj1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanchayatiRaj1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanchayatiRaj1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
