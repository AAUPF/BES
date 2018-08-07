import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health10Component } from './health10.component';

describe('Health10Component', () => {
  let component: Health10Component;
  let fixture: ComponentFixture<Health10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
