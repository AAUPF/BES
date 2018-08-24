import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagement1Component } from './resource-management1.component';

describe('ResourceManagement1Component', () => {
  let component: ResourceManagement1Component;
  let fixture: ComponentFixture<ResourceManagement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
