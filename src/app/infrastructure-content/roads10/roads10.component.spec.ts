import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Roads10Component } from './roads10.component';

describe('Roads10Component', () => {
  let component: Roads10Component;
  let fixture: ComponentFixture<Roads10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Roads10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Roads10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
