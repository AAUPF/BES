import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirwaysComponent } from './airways.component';

describe('AirwaysComponent', () => {
  let component: AirwaysComponent;
  let fixture: ComponentFixture<AirwaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirwaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
