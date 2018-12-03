import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseSection4Component } from './district-wise-section4.component';

describe('DistrictWiseSection4Component', () => {
  let component: DistrictWiseSection4Component;
  let fixture: ComponentFixture<DistrictWiseSection4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseSection4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseSection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
