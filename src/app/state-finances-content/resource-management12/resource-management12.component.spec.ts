import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagement12Component } from './resource-management12.component';

describe('ResourceManagement12Component', () => {
  let component: ResourceManagement12Component;
  let fixture: ComponentFixture<ResourceManagement12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagement12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagement12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
