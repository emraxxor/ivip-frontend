import { TestBed } from '@angular/core/testing';

import { CommonFrontendLibraryService } from './common-frontend-library.service';

describe('CommonFrontendLibraryService', () => {
  let service: CommonFrontendLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonFrontendLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
