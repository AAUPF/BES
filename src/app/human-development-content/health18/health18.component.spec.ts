import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health18Component } from './health18.component';

describe('Health18Component', () => {
  let component: Health18Component;
  let fixture: ComponentFixture<Health18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
