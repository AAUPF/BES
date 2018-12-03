import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseSection2Component } from './district-wise-section2.component';

describe('DistrictWiseSection2Component', () => {
  let component: DistrictWiseSection2Component;
  let fixture: ComponentFixture<DistrictWiseSection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseSection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
