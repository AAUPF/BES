import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenEmpowerment1Component } from './women-empowerment1.component';

describe('WomenEmpowerment1Component', () => {
  let component: WomenEmpowerment1Component;
  let fixture: ComponentFixture<WomenEmpowerment1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenEmpowerment1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenEmpowerment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
