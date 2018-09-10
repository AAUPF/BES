import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSurvey3Component } from './annual-survey3.component';

describe('AnnualSurvey3Component', () => {
  let component: AnnualSurvey3Component;
  let fixture: ComponentFixture<AnnualSurvey3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualSurvey3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualSurvey3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
