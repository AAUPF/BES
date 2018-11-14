import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralDevelopmentProgrammes10Component } from './rural-development-programmes10.component';

describe('RuralDevelopmentProgrammes10Component', () => {
  let component: RuralDevelopmentProgrammes10Component;
  let fixture: ComponentFixture<RuralDevelopmentProgrammes10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuralDevelopmentProgrammes10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuralDevelopmentProgrammes10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
