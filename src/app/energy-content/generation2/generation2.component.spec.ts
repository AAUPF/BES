import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Generation2Component } from './generation2.component';

describe('Generation2Component', () => {
  let component: Generation2Component;
  let fixture: ComponentFixture<Generation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Generation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Generation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
