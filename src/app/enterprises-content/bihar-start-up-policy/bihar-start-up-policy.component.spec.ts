import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiharStartUpPolicyComponent } from './bihar-start-up-policy.component';

describe('BiharStartUpPolicyComponent', () => {
  let component: BiharStartUpPolicyComponent;
  let fixture: ComponentFixture<BiharStartUpPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiharStartUpPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiharStartUpPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
