import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenEmpowerment3Component } from './women-empowerment3.component';

describe('WomenEmpowerment3Component', () => {
  let component: WomenEmpowerment3Component;
  let fixture: ComponentFixture<WomenEmpowerment3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenEmpowerment3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenEmpowerment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
