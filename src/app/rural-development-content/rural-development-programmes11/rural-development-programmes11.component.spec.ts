import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralDevelopmentProgrammes11Component } from './rural-development-programmes11.component';

describe('RuralDevelopmentProgrammes11Component', () => {
  let component: RuralDevelopmentProgrammes11Component;
  let fixture: ComponentFixture<RuralDevelopmentProgrammes11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuralDevelopmentProgrammes11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuralDevelopmentProgrammes11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
