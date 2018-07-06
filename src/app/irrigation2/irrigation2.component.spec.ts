import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Irrigation2Component } from './irrigation2.component';

describe('Irrigation2Component', () => {
  let component: Irrigation2Component;
  let fixture: ComponentFixture<Irrigation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Irrigation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Irrigation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
