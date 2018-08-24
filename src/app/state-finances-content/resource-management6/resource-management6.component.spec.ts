import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagement6Component } from './resource-management6.component';

describe('ResourceManagement6Component', () => {
  let component: ResourceManagement6Component;
  let fixture: ComponentFixture<ResourceManagement6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagement6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagement6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
