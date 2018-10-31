import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Roads7Component } from './roads7.component';

describe('Roads7Component', () => {
  let component: Roads7Component;
  let fixture: ComponentFixture<Roads7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Roads7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Roads7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
