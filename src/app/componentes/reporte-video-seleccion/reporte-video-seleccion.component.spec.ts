import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteVideoSeleccionComponent } from './reporte-video-seleccion.component';

describe('ReporteVideoSeleccionComponent', () => {
  let component: ReporteVideoSeleccionComponent;
  let fixture: ComponentFixture<ReporteVideoSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReporteVideoSeleccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteVideoSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
