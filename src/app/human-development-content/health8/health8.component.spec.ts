import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health8Component } from './health8.component';

describe('Health8Component', () => {
  let component: Health8Component;
  let fixture: ComponentFixture<Health8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
