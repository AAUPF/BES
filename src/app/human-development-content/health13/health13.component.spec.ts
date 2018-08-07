import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health13Component } from './health13.component';

describe('Health13Component', () => {
  let component: Health13Component;
  let fixture: ComponentFixture<Health13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
