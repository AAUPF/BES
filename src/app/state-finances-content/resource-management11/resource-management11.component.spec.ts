import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagement11Component } from './resource-management11.component';

describe('ResourceManagement11Component', () => {
  let component: ResourceManagement11Component;
  let fixture: ComponentFixture<ResourceManagement11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagement11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagement11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
