import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHusbandry3Component } from './animal-husbandry3.component';

describe('AnimalHusbandry3Component', () => {
  let component: AnimalHusbandry3Component;
  let fixture: ComponentFixture<AnimalHusbandry3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalHusbandry3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalHusbandry3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
