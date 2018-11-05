import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionOfPowerRequirement5Component } from './projection-of-power-requirement5.component';

describe('ProjectionOfPowerRequirement5Component', () => {
  let component: ProjectionOfPowerRequirement5Component;
  let fixture: ComponentFixture<ProjectionOfPowerRequirement5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionOfPowerRequirement5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionOfPowerRequirement5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
