import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelOfUrbanisation5Component } from './level-of-urbanisation5.component';

describe('LevelOfUrbanisation5Component', () => {
  let component: LevelOfUrbanisation5Component;
  let fixture: ComponentFixture<LevelOfUrbanisation5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelOfUrbanisation5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelOfUrbanisation5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
