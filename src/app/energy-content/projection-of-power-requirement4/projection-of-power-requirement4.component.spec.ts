import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionOfPowerRequirement4Component } from './projection-of-power-requirement4.component';

describe('ProjectionOfPowerRequirement4Component', () => {
  let component: ProjectionOfPowerRequirement4Component;
  let fixture: ComponentFixture<ProjectionOfPowerRequirement4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionOfPowerRequirement4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionOfPowerRequirement4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
