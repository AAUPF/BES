import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health15Component } from './health15.component';

describe('Health15Component', () => {
  let component: Health15Component;
  let fixture: ComponentFixture<Health15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
