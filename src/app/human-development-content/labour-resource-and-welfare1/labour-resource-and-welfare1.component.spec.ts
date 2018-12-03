import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourResourceAndWelfare1Component } from './labour-resource-and-welfare1.component';

describe('LabourResourceAndWelfare1Component', () => {
  let component: LabourResourceAndWelfare1Component;
  let fixture: ComponentFixture<LabourResourceAndWelfare1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabourResourceAndWelfare1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourResourceAndWelfare1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
