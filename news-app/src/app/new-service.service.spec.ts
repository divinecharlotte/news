/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewServiceService } from './new-service.service';

describe('Service: NewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewServiceService]
    });
  });

  it('should ...', inject([NewServiceService], (service: NewServiceService) => {
    expect(service).toBeTruthy();
  }));
});
