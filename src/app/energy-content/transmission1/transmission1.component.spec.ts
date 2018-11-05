import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transmission1Component } from './transmission1.component';

describe('Transmission1Component', () => {
  let component: Transmission1Component;
  let fixture: ComponentFixture<Transmission1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transmission1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transmission1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
