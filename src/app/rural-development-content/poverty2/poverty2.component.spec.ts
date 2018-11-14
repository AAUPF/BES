import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Poverty2Component } from './poverty2.component';

describe('Poverty2Component', () => {
  let component: Poverty2Component;
  let fixture: ComponentFixture<Poverty2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Poverty2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Poverty2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
