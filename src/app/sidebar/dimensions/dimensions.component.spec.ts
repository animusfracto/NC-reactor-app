import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionsComponent } from './dimensions.component';

describe('DimensionsComponent', () => {
  let component: DimensionsComponent;
  let fixture: ComponentFixture<DimensionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimensionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
