import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTransport1Component } from './road-transport1.component';

describe('RoadTransport1Component', () => {
  let component: RoadTransport1Component;
  let fixture: ComponentFixture<RoadTransport1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTransport1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTransport1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
