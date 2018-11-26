import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoralShare5Component } from './sectoral-share5.component';

describe('SectoralShare5Component', () => {
  let component: SectoralShare5Component;
  let fixture: ComponentFixture<SectoralShare5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoralShare5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoralShare5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
