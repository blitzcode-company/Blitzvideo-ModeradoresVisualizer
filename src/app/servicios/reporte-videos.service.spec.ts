import { TestBed } from '@angular/core/testing';

import { ReporteVideosService } from './reporte-videos.service';

describe('ReporteVideosService', () => {
  let service: ReporteVideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
