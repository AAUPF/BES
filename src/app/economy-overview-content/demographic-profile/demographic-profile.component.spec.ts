import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicProfileComponent } from './demographic-profile.component';

describe('DemographicProfileComponent', () => {
  let component: DemographicProfileComponent;
  let fixture: ComponentFixture<DemographicProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemographicProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
