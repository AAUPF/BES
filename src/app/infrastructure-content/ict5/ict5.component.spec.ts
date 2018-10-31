import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICT5Component } from './ict5.component';

describe('ICT5Component', () => {
  let component: ICT5Component;
  let fixture: ComponentFixture<ICT5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICT5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICT5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
