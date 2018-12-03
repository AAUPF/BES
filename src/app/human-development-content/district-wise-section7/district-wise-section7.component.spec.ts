import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseSection7Component } from './district-wise-section7.component';

describe('DistrictWiseSection7Component', () => {
  let component: DistrictWiseSection7Component;
  let fixture: ComponentFixture<DistrictWiseSection7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseSection7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseSection7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
