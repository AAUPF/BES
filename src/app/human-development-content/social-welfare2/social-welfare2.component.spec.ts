import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialWelfare2Component } from './social-welfare2.component';

describe('SocialWelfare2Component', () => {
  let component: SocialWelfare2Component;
  let fixture: ComponentFixture<SocialWelfare2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialWelfare2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialWelfare2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
