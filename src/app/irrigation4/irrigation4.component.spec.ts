import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Irrigation4Component } from './irrigation4.component';

describe('Irrigation4Component', () => {
  let component: Irrigation4Component;
  let fixture: ComponentFixture<Irrigation4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Irrigation4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Irrigation4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
