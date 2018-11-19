import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelOfUrbanisation1Component } from './level-of-urbanisation1.component';

describe('LevelOfUrbanisation1Component', () => {
  let component: LevelOfUrbanisation1Component;
  let fixture: ComponentFixture<LevelOfUrbanisation1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelOfUrbanisation1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelOfUrbanisation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
