import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleReporteusuarioModalComponent } from './detalle-reporteusuario-modal.component';

describe('DetalleReporteusuarioModalComponent', () => {
  let component: DetalleReporteusuarioModalComponent;
  let fixture: ComponentFixture<DetalleReporteusuarioModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleReporteusuarioModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleReporteusuarioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
