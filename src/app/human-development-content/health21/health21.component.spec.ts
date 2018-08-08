import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health21Component } from './health21.component';

describe('Health21Component', () => {
  let component: Health21Component;
  let fixture: ComponentFixture<Health21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
