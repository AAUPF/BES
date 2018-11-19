import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelOfUrbanisation2Component } from './level-of-urbanisation2.component';

describe('LevelOfUrbanisation2Component', () => {
  let component: LevelOfUrbanisation2Component;
  let fixture: ComponentFixture<LevelOfUrbanisation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelOfUrbanisation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelOfUrbanisation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
