import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenEmpowerment2Component } from './women-empowerment2.component';

describe('WomenEmpowerment2Component', () => {
  let component: WomenEmpowerment2Component;
  let fixture: ComponentFixture<WomenEmpowerment2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenEmpowerment2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenEmpowerment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
