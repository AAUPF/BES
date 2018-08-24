import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagement8Component } from './resource-management8.component';

describe('ResourceManagement8Component', () => {
  let component: ResourceManagement8Component;
  let fixture: ComponentFixture<ResourceManagement8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagement8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagement8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
