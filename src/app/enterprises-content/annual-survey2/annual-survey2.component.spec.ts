import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSurvey2Component } from './annual-survey2.component';

describe('AnnualSurvey2Component', () => {
  let component: AnnualSurvey2Component;
  let fixture: ComponentFixture<AnnualSurvey2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualSurvey2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualSurvey2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
