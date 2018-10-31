import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICT3Component } from './ict3.component';

describe('ICT3Component', () => {
  let component: ICT3Component;
  let fixture: ComponentFixture<ICT3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICT3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICT3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
