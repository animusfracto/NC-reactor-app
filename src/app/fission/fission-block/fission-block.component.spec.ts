import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FissionBlockComponent } from './fission-block.component';

describe('FissionBlockComponent', () => {
  let component: FissionBlockComponent;
  let fixture: ComponentFixture<FissionBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FissionBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FissionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
