import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Irrigation5Component } from './irrigation5.component';

describe('Irrigation5Component', () => {
  let component: Irrigation5Component;
  let fixture: ComponentFixture<Irrigation5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Irrigation5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Irrigation5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
