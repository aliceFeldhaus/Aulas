import { TestBed } from '@angular/core/testing';

import { AuthAdm } from './authAdm.service';

describe('AuthADMService', () => {
  let service: AuthAdm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAdm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
