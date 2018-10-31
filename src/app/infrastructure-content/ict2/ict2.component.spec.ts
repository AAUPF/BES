import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICT2Component } from './ict2.component';

describe('ICT2Component', () => {
  let component: ICT2Component;
  let fixture: ComponentFixture<ICT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
