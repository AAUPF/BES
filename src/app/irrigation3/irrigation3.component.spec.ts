import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Irrigation3Component } from './irrigation3.component';

describe('Irrigation3Component', () => {
  let component: Irrigation3Component;
  let fixture: ComponentFixture<Irrigation3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Irrigation3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Irrigation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
