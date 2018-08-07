import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health4Component } from './health4.component';

describe('Health4Component', () => {
  let component: Health4Component;
  let fixture: ComponentFixture<Health4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
