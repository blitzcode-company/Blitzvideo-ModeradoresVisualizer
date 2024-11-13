import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleReporteModalComponent } from './detalle-reporte-modal.component';

describe('DetalleReporteModalComponent', () => {
  let component: DetalleReporteModalComponent;
  let fixture: ComponentFixture<DetalleReporteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleReporteModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleReporteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
