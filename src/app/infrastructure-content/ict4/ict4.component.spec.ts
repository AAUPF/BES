import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICT4Component } from './ict4.component';

describe('ICT4Component', () => {
  let component: ICT4Component;
  let fixture: ComponentFixture<ICT4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICT4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICT4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
