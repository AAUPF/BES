import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionOfPowerRequirement1Component } from './projection-of-power-requirement1.component';

describe('ProjectionOfPowerRequirement1Component', () => {
  let component: ProjectionOfPowerRequirement1Component;
  let fixture: ComponentFixture<ProjectionOfPowerRequirement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionOfPowerRequirement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionOfPowerRequirement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
