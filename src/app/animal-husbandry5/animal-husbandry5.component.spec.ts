import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHusbandry5Component } from './animal-husbandry5.component';

describe('AnimalHusbandry5Component', () => {
  let component: AnimalHusbandry5Component;
  let fixture: ComponentFixture<AnimalHusbandry5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalHusbandry5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalHusbandry5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
