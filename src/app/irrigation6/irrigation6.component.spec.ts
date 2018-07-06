import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Irrigation6Component } from './irrigation6.component';

describe('Irrigation6Component', () => {
  let component: Irrigation6Component;
  let fixture: ComponentFixture<Irrigation6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Irrigation6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Irrigation6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
