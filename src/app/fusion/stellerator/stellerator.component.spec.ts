import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StelleratorComponent } from './stellerator.component';

describe('StelleratorComponent', () => {
  let component: StelleratorComponent;
  let fixture: ComponentFixture<StelleratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StelleratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StelleratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
