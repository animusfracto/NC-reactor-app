import { TestBed } from '@angular/core/testing';

import { ReactorStoreService } from './reactor-store.service';

describe('ReactorStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReactorStoreService = TestBed.get(ReactorStoreService);
    expect(service).toBeTruthy();
  });
});
