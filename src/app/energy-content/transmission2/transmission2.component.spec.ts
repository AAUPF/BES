import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transmission2Component } from './transmission2.component';

describe('Transmission2Component', () => {
  let component: Transmission2Component;
  let fixture: ComponentFixture<Transmission2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transmission2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transmission2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
