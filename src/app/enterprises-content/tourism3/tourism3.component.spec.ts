import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tourism3Component } from './tourism3.component';

describe('Tourism3Component', () => {
  let component: Tourism3Component;
  let fixture: ComponentFixture<Tourism3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tourism3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tourism3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
