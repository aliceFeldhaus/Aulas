import { TestBed } from '@angular/core/testing';

import { AuthLogin } from './authLogin.service';

describe('AuthLoginService', () => {
  let service: AuthLogin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthLogin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
