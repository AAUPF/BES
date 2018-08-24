import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagement13Component } from './resource-management13.component';

describe('ResourceManagement13Component', () => {
  let component: ResourceManagement13Component;
  let fixture: ComponentFixture<ResourceManagement13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagement13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagement13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
