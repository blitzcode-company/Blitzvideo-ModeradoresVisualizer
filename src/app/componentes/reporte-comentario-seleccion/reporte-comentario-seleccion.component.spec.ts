import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteComentarioSeleccionComponent } from './reporte-comentario-seleccion.component';

describe('ReporteComentarioSeleccionComponent', () => {
  let component: ReporteComentarioSeleccionComponent;
  let fixture: ComponentFixture<ReporteComentarioSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReporteComentarioSeleccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteComentarioSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
