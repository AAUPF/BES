import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHusbandry6Component } from './animal-husbandry6.component';

describe('AnimalHusbandry6Component', () => {
  let component: AnimalHusbandry6Component;
  let fixture: ComponentFixture<AnimalHusbandry6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalHusbandry6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalHusbandry6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
