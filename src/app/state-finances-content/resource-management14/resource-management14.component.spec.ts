import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagement14Component } from './resource-management14.component';

describe('ResourceManagement14Component', () => {
  let component: ResourceManagement14Component;
  let fixture: ComponentFixture<ResourceManagement14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagement14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagement14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
