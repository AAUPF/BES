import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health2Component } from './health2.component';

describe('Health2Component', () => {
  let component: Health2Component;
  let fixture: ComponentFixture<Health2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
