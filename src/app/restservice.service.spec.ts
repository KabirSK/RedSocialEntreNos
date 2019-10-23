import { TestBed } from '@angular/core/testing';

import { RESTServiceService } from './restservice.service';

describe('RESTServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RESTServiceService = TestBed.get(RESTServiceService);
    expect(service).toBeTruthy();
  });
});
