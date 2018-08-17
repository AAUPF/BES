import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicProfile2Component } from './demographic-profile2.component';

describe('DemographicProfile2Component', () => {
  let component: DemographicProfile2Component;
  let fixture: ComponentFixture<DemographicProfile2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemographicProfile2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicProfile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
