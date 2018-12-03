import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourResourceAndWelfare2Component } from './labour-resource-and-welfare2.component';

describe('LabourResourceAndWelfare2Component', () => {
  let component: LabourResourceAndWelfare2Component;
  let fixture: ComponentFixture<LabourResourceAndWelfare2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabourResourceAndWelfare2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourResourceAndWelfare2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
