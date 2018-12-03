import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseSection3Component } from './district-wise-section3.component';

describe('DistrictWiseSection3Component', () => {
  let component: DistrictWiseSection3Component;
  let fixture: ComponentFixture<DistrictWiseSection3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseSection3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
