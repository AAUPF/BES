import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Roads9Component } from './roads9.component';

describe('Roads9Component', () => {
  let component: Roads9Component;
  let fixture: ComponentFixture<Roads9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Roads9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Roads9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
