import { TestBed } from '@angular/core/testing';

import { ReporteUsuariosService } from './reporte-usuarios.service';

describe('ReporteUsuariosService', () => {
  let service: ReporteUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
