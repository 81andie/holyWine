import { TestBed } from '@angular/core/testing';

import { WineCardServiceService } from './wine-card-service.service';

describe('WineCardServiceService', () => {
  let service: WineCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
