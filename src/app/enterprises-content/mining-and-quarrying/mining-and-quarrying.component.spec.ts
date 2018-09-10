import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningAndQuarryingComponent } from './mining-and-quarrying.component';

describe('MiningAndQuarryingComponent', () => {
  let component: MiningAndQuarryingComponent;
  let fixture: ComponentFixture<MiningAndQuarryingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningAndQuarryingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningAndQuarryingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
