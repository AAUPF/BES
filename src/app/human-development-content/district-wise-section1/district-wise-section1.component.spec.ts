import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseSection1Component } from './district-wise-section1.component';

describe('DistrictWiseSection1Component', () => {
  let component: DistrictWiseSection1Component;
  let fixture: ComponentFixture<DistrictWiseSection1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseSection1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
