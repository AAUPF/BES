import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health16Component } from './health16.component';

describe('Health16Component', () => {
  let component: Health16Component;
  let fixture: ComponentFixture<Health16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
