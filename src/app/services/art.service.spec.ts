/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtService } from './art.service';

describe('Service: Art', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtService]
    });
  });

  it('should ...', inject([ArtService], (service: ArtService) => {
    expect(service).toBeTruthy();
  }));
});
