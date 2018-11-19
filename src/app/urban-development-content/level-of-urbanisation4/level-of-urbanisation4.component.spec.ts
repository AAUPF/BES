import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelOfUrbanisation4Component } from './level-of-urbanisation4.component';

describe('LevelOfUrbanisation4Component', () => {
  let component: LevelOfUrbanisation4Component;
  let fixture: ComponentFixture<LevelOfUrbanisation4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelOfUrbanisation4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelOfUrbanisation4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
