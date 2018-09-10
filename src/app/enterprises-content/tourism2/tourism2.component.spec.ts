import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tourism2Component } from './tourism2.component';

describe('Tourism2Component', () => {
  let component: Tourism2Component;
  let fixture: ComponentFixture<Tourism2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tourism2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tourism2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
