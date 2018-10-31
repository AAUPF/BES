import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Roads3Component } from './roads3.component';

describe('Roads3Component', () => {
  let component: Roads3Component;
  let fixture: ComponentFixture<Roads3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Roads3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Roads3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
