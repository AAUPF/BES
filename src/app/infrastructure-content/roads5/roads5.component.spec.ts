import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Roads5Component } from './roads5.component';

describe('Roads5Component', () => {
  let component: Roads5Component;
  let fixture: ComponentFixture<Roads5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Roads5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Roads5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
