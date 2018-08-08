import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health20Component } from './health20.component';

describe('Health20Component', () => {
  let component: Health20Component;
  let fixture: ComponentFixture<Health20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
