import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHusbandry1Component } from './animal-husbandry1.component';

describe('AnimalHusbandry1Component', () => {
  let component: AnimalHusbandry1Component;
  let fixture: ComponentFixture<AnimalHusbandry1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalHusbandry1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalHusbandry1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
