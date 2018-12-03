import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSecurityForOldAndDisabledComponent } from './social-security-for-old-and-disabled.component';

describe('SocialSecurityForOldAndDisabledComponent', () => {
  let component: SocialSecurityForOldAndDisabledComponent;
  let fixture: ComponentFixture<SocialSecurityForOldAndDisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialSecurityForOldAndDisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSecurityForOldAndDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
