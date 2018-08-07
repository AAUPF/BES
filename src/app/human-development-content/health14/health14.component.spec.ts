import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health14Component } from './health14.component';

describe('Health14Component', () => {
  let component: Health14Component;
  let fixture: ComponentFixture<Health14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
