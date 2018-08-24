import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagement10Component } from './resource-management10.component';

describe('ResourceManagement10Component', () => {
  let component: ResourceManagement10Component;
  let fixture: ComponentFixture<ResourceManagement10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagement10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagement10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
