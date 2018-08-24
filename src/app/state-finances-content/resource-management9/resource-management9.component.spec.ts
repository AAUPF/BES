import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagement9Component } from './resource-management9.component';

describe('ResourceManagement9Component', () => {
  let component: ResourceManagement9Component;
  let fixture: ComponentFixture<ResourceManagement9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagement9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagement9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
