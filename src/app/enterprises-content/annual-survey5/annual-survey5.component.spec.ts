import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSurvey5Component } from './annual-survey5.component';

describe('AnnualSurvey5Component', () => {
  let component: AnnualSurvey5Component;
  let fixture: ComponentFixture<AnnualSurvey5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualSurvey5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualSurvey5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
