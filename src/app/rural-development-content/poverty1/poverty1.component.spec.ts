import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Poverty1Component } from './poverty1.component';

describe('Poverty1Component', () => {
  let component: Poverty1Component;
  let fixture: ComponentFixture<Poverty1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Poverty1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Poverty1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
