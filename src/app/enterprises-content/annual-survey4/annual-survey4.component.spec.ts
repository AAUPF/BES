import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSurvey4Component } from './annual-survey4.component';

describe('AnnualSurvey4Component', () => {
  let component: AnnualSurvey4Component;
  let fixture: ComponentFixture<AnnualSurvey4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualSurvey4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualSurvey4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
