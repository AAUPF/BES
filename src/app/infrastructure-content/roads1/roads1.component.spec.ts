import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Roads1Component } from './roads1.component';

describe('Roads1Component', () => {
  let component: Roads1Component;
  let fixture: ComponentFixture<Roads1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Roads1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Roads1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
