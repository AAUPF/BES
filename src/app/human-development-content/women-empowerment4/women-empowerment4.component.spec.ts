import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenEmpowerment4Component } from './women-empowerment4.component';

describe('WomenEmpowerment4Component', () => {
  let component: WomenEmpowerment4Component;
  let fixture: ComponentFixture<WomenEmpowerment4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenEmpowerment4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenEmpowerment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
