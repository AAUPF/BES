import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralDevelopmentProgrammes8Component } from './rural-development-programmes8.component';

describe('RuralDevelopmentProgrammes8Component', () => {
  let component: RuralDevelopmentProgrammes8Component;
  let fixture: ComponentFixture<RuralDevelopmentProgrammes8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuralDevelopmentProgrammes8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuralDevelopmentProgrammes8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
