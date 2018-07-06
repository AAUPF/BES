import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rainfall2Component } from './rainfall2.component';

describe('Rainfall2Component', () => {
  let component: Rainfall2Component;
  let fixture: ComponentFixture<Rainfall2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rainfall2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rainfall2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
