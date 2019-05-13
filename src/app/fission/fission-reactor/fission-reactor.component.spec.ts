import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FissionReactorComponent } from './fission-reactor.component';

describe('FissionReactorComponent', () => {
  let component: FissionReactorComponent;
  let fixture: ComponentFixture<FissionReactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FissionReactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FissionReactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
