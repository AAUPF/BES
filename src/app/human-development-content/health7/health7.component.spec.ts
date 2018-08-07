import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health7Component } from './health7.component';

describe('Health7Component', () => {
  let component: Health7Component;
  let fixture: ComponentFixture<Health7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
