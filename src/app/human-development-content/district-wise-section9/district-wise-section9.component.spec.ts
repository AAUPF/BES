import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseSection9Component } from './district-wise-section9.component';

describe('DistrictWiseSection9Component', () => {
  let component: DistrictWiseSection9Component;
  let fixture: ComponentFixture<DistrictWiseSection9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseSection9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseSection9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
