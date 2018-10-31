import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Roads4Component } from './roads4.component';

describe('Roads4Component', () => {
  let component: Roads4Component;
  let fixture: ComponentFixture<Roads4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Roads4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Roads4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
