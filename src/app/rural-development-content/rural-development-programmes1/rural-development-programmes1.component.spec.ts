import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralDevelopmentProgrammes1Component } from './rural-development-programmes1.component';

describe('RuralDevelopmentProgrammes1Component', () => {
  let component: RuralDevelopmentProgrammes1Component;
  let fixture: ComponentFixture<RuralDevelopmentProgrammes1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuralDevelopmentProgrammes1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuralDevelopmentProgrammes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
