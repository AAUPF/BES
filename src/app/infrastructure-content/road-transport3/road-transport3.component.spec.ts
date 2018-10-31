import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTransport3Component } from './road-transport3.component';

describe('RoadTransport3Component', () => {
  let component: RoadTransport3Component;
  let fixture: ComponentFixture<RoadTransport3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTransport3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTransport3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
