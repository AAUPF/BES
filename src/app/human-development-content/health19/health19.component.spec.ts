import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health19Component } from './health19.component';

describe('Health19Component', () => {
  let component: Health19Component;
  let fixture: ComponentFixture<Health19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
