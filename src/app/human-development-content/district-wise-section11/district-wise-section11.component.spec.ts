import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseSection11Component } from './district-wise-section11.component';

describe('DistrictWiseSection11Component', () => {
  let component: DistrictWiseSection11Component;
  let fixture: ComponentFixture<DistrictWiseSection11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseSection11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseSection11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
