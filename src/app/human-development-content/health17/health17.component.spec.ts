import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health17Component } from './health17.component';

describe('Health17Component', () => {
  let component: Health17Component;
  let fixture: ComponentFixture<Health17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
