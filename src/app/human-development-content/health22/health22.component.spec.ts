import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Health22Component } from './health22.component';

describe('Health22Component', () => {
  let component: Health22Component;
  let fixture: ComponentFixture<Health22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Health22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Health22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
