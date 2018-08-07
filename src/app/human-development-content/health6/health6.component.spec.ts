import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health6Component } from './health6.component';

describe('Health6Component', () => {
  let component: Health6Component;
  let fixture: ComponentFixture<Health6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
