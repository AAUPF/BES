import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseSection6Component } from './district-wise-section6.component';

describe('DistrictWiseSection6Component', () => {
  let component: DistrictWiseSection6Component;
  let fixture: ComponentFixture<DistrictWiseSection6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseSection6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseSection6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
