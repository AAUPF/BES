import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapbiharComponent } from './mapbihar.component';

describe('MapbiharComponent', () => {
  let component: MapbiharComponent;
  let fixture: ComponentFixture<MapbiharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapbiharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapbiharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
