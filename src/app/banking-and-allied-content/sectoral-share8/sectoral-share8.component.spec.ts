import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoralShare8Component } from './sectoral-share8.component';

describe('SectoralShare8Component', () => {
  let component: SectoralShare8Component;
  let fixture: ComponentFixture<SectoralShare8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoralShare8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoralShare8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
