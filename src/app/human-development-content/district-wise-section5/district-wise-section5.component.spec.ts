import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseSection5Component } from './district-wise-section5.component';

describe('DistrictWiseSection5Component', () => {
  let component: DistrictWiseSection5Component;
  let fixture: ComponentFixture<DistrictWiseSection5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseSection5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseSection5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
