import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health5Component } from './health5.component';

describe('Health5Component', () => {
  let component: Health5Component;
  let fixture: ComponentFixture<Health5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
