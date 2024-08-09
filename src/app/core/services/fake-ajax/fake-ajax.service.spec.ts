import { TestBed } from '@angular/core/testing';

import { FakeAjaxService } from './fake-ajax.service';

describe('FakeAjaxService', () => {
  let service: FakeAjaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeAjaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
