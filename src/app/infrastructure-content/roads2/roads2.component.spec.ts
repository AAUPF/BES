import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Roads2Component } from './roads2.component';

describe('Roads2Component', () => {
  let component: Roads2Component;
  let fixture: ComponentFixture<Roads2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Roads2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Roads2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
