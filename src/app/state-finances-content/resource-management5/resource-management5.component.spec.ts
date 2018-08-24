import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagement5Component } from './resource-management5.component';

describe('ResourceManagement5Component', () => {
  let component: ResourceManagement5Component;
  let fixture: ComponentFixture<ResourceManagement5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagement5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagement5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
