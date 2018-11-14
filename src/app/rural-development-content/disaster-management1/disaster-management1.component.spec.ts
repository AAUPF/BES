import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterManagement1Component } from './disaster-management1.component';

describe('DisasterManagement1Component', () => {
  let component: DisasterManagement1Component;
  let fixture: ComponentFixture<DisasterManagement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisasterManagement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterManagement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
