import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSurvey1Component } from './annual-survey1.component';

describe('AnnualSurvey1Component', () => {
  let component: AnnualSurvey1Component;
  let fixture: ComponentFixture<AnnualSurvey1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualSurvey1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualSurvey1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
