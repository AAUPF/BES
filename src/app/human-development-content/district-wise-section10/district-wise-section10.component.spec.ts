import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseSection10Component } from './district-wise-section10.component';

describe('DistrictWiseSection10Component', () => {
  let component: DistrictWiseSection10Component;
  let fixture: ComponentFixture<DistrictWiseSection10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseSection10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseSection10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
