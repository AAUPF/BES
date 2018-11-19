import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelOfUrbanisation3Component } from './level-of-urbanisation3.component';

describe('LevelOfUrbanisation3Component', () => {
  let component: LevelOfUrbanisation3Component;
  let fixture: ComponentFixture<LevelOfUrbanisation3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelOfUrbanisation3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelOfUrbanisation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
