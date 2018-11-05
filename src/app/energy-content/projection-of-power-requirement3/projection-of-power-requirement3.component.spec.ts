import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionOfPowerRequirement3Component } from './projection-of-power-requirement3.component';

describe('ProjectionOfPowerRequirement3Component', () => {
  let component: ProjectionOfPowerRequirement3Component;
  let fixture: ComponentFixture<ProjectionOfPowerRequirement3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionOfPowerRequirement3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionOfPowerRequirement3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
