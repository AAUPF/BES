import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanDevelopmentComponent } from './human-development.component';

describe('HumanDevelopmentComponent', () => {
  let component: HumanDevelopmentComponent;
  let fixture: ComponentFixture<HumanDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
