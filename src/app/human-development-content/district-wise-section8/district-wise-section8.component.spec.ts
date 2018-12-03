import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseSection8Component } from './district-wise-section8.component';

describe('DistrictWiseSection8Component', () => {
  let component: DistrictWiseSection8Component;
  let fixture: ComponentFixture<DistrictWiseSection8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseSection8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseSection8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
