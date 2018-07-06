import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHusbandry4Component } from './animal-husbandry4.component';

describe('AnimalHusbandry4Component', () => {
  let component: AnimalHusbandry4Component;
  let fixture: ComponentFixture<AnimalHusbandry4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalHusbandry4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalHusbandry4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
