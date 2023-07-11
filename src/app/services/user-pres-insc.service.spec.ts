import { TestBed } from '@angular/core/testing';

import { UserPresInscService } from './user-pres-insc.service';

describe('UserPresInscService', () => {
  let service: UserPresInscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPresInscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
