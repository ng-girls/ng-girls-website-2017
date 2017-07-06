import { TestBed, inject } from '@angular/core/testing';

import { PartnersService } from './partners.service';

describe('PartnersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartnersService]
    });
  });

  it('should ...', inject([PartnersService], (service: PartnersService) => {
    expect(service).toBeTruthy();
  }));
});
