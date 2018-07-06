import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHusbandry2Component } from './animal-husbandry2.component';

describe('AnimalHusbandry2Component', () => {
  let component: AnimalHusbandry2Component;
  let fixture: ComponentFixture<AnimalHusbandry2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalHusbandry2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalHusbandry2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
