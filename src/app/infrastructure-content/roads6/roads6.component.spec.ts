import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Roads6Component } from './roads6.component';

describe('Roads6Component', () => {
  let component: Roads6Component;
  let fixture: ComponentFixture<Roads6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Roads6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Roads6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
