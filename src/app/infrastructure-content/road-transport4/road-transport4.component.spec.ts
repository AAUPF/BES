import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTransport4Component } from './road-transport4.component';

describe('RoadTransport4Component', () => {
  let component: RoadTransport4Component;
  let fixture: ComponentFixture<RoadTransport4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTransport4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTransport4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
