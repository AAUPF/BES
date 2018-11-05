import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionOfPowerRequirement2Component } from './projection-of-power-requirement2.component';

describe('ProjectionOfPowerRequirement2Component', () => {
  let component: ProjectionOfPowerRequirement2Component;
  let fixture: ComponentFixture<ProjectionOfPowerRequirement2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionOfPowerRequirement2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionOfPowerRequirement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
