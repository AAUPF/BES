import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialWelfare1Component } from './social-welfare1.component';

describe('SocialWelfare1Component', () => {
  let component: SocialWelfare1Component;
  let fixture: ComponentFixture<SocialWelfare1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialWelfare1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialWelfare1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
