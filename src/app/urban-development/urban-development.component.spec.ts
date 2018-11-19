import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanDevelopmentComponent } from './urban-development.component';

describe('UrbanDevelopmentComponent', () => {
  let component: UrbanDevelopmentComponent;
  let fixture: ComponentFixture<UrbanDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
