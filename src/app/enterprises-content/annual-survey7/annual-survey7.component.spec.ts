import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSurvey7Component } from './annual-survey7.component';

describe('AnnualSurvey7Component', () => {
  let component: AnnualSurvey7Component;
  let fixture: ComponentFixture<AnnualSurvey7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualSurvey7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualSurvey7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
