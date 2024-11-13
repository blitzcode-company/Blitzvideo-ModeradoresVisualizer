import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleReportecomentarioModalComponent } from './detalle-reportecomentario-modal.component';

describe('DetalleReportecomentarioModalComponent', () => {
  let component: DetalleReportecomentarioModalComponent;
  let fixture: ComponentFixture<DetalleReportecomentarioModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleReportecomentarioModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleReportecomentarioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
