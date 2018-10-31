import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTransport2Component } from './road-transport2.component';

describe('RoadTransport2Component', () => {
  let component: RoadTransport2Component;
  let fixture: ComponentFixture<RoadTransport2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTransport2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTransport2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
