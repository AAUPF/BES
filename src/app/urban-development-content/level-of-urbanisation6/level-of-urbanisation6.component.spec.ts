import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelOfUrbanisation6Component } from './level-of-urbanisation6.component';

describe('LevelOfUrbanisation6Component', () => {
  let component: LevelOfUrbanisation6Component;
  let fixture: ComponentFixture<LevelOfUrbanisation6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelOfUrbanisation6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelOfUrbanisation6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
