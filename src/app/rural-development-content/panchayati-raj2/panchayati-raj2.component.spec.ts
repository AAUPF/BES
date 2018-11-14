import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanchayatiRaj2Component } from './panchayati-raj2.component';

describe('PanchayatiRaj2Component', () => {
  let component: PanchayatiRaj2Component;
  let fixture: ComponentFixture<PanchayatiRaj2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanchayatiRaj2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanchayatiRaj2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
