import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagement3Component } from './resource-management3.component';

describe('ResourceManagement3Component', () => {
  let component: ResourceManagement3Component;
  let fixture: ComponentFixture<ResourceManagement3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagement3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagement3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
