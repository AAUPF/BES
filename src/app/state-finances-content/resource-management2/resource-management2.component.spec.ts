import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagement2Component } from './resource-management2.component';

describe('ResourceManagement2Component', () => {
  let component: ResourceManagement2Component;
  let fixture: ComponentFixture<ResourceManagement2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagement2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
