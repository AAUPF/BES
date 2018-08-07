import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health11Component } from './health11.component';

describe('Health11Component', () => {
  let component: Health11Component;
  let fixture: ComponentFixture<Health11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
