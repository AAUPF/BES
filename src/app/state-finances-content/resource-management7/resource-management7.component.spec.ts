import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagement7Component } from './resource-management7.component';

describe('ResourceManagement7Component', () => {
  let component: ResourceManagement7Component;
  let fixture: ComponentFixture<ResourceManagement7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagement7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagement7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
