import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteUsuarioSeleccionComponent } from './reporte-usuario-seleccion.component';

describe('ReporteUsuarioSeleccionComponent', () => {
  let component: ReporteUsuarioSeleccionComponent;
  let fixture: ComponentFixture<ReporteUsuarioSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReporteUsuarioSeleccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteUsuarioSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
