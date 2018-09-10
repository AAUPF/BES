import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tourism1Component } from './tourism1.component';

describe('Tourism1Component', () => {
  let component: Tourism1Component;
  let fixture: ComponentFixture<Tourism1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tourism1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tourism1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
