import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Roads8Component } from './roads8.component';

describe('Roads8Component', () => {
  let component: Roads8Component;
  let fixture: ComponentFixture<Roads8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Roads8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Roads8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
