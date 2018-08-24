import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagement4Component } from './resource-management4.component';

describe('ResourceManagement4Component', () => {
  let component: ResourceManagement4Component;
  let fixture: ComponentFixture<ResourceManagement4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagement4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagement4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
