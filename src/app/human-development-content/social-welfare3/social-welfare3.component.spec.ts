import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialWelfare3Component } from './social-welfare3.component';

describe('SocialWelfare3Component', () => {
  let component: SocialWelfare3Component;
  let fixture: ComponentFixture<SocialWelfare3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialWelfare3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialWelfare3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
