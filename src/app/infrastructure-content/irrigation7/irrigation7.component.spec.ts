import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Irrigation7Component } from './irrigation7.component';

describe('Irrigation7Component', () => {
  let component: Irrigation7Component;
  let fixture: ComponentFixture<Irrigation7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Irrigation7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Irrigation7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
