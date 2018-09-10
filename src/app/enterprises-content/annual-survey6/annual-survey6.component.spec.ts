import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSurvey6Component } from './annual-survey6.component';

describe('AnnualSurvey6Component', () => {
  let component: AnnualSurvey6Component;
  let fixture: ComponentFixture<AnnualSurvey6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualSurvey6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualSurvey6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
