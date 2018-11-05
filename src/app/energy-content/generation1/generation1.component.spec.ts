import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Generation1Component } from './generation1.component';

describe('Generation1Component', () => {
  let component: Generation1Component;
  let fixture: ComponentFixture<Generation1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Generation1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Generation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
