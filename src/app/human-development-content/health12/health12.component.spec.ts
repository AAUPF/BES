import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health12Component } from './health12.component';

describe('Health12Component', () => {
  let component: Health12Component;
  let fixture: ComponentFixture<Health12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
