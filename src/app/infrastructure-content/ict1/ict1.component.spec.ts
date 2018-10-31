import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICT1Component } from './ict1.component';

describe('ICT1Component', () => {
  let component: ICT1Component;
  let fixture: ComponentFixture<ICT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
