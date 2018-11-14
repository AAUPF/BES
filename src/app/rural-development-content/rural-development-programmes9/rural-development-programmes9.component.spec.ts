import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralDevelopmentProgrammes9Component } from './rural-development-programmes9.component';

describe('RuralDevelopmentProgrammes9Component', () => {
  let component: RuralDevelopmentProgrammes9Component;
  let fixture: ComponentFixture<RuralDevelopmentProgrammes9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuralDevelopmentProgrammes9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuralDevelopmentProgrammes9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
