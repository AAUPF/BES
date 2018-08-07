import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health9Component } from './health9.component';

describe('Health9Component', () => {
  let component: Health9Component;
  let fixture: ComponentFixture<Health9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
