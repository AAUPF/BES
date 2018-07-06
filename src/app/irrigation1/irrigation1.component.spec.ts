import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Irrigation1Component } from './irrigation1.component';

describe('Irrigation1Component', () => {
  let component: Irrigation1Component;
  let fixture: ComponentFixture<Irrigation1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Irrigation1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Irrigation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
