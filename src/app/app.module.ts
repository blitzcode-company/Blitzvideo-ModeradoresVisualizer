import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ReportesComentariosComponent } from './componentes/reportes-comentarios/reportes-comentarios.component';
import { ReportesVideosComponent } from './componentes/reportes-videos/reportes-videos.component';
import { ReportesUsuariosComponent } from './componentes/reportes-usuarios/reportes-usuarios.component';
import { DetalleReporteModalComponent } from './modales/detalle-reporte-modal/detalle-reporte-modal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReportesVideoResueltoComponent } from './componentes/reportes-video-resuelto/reportes-video-resuelto.component';
import { DetalleReportecomentarioModalComponent } from './modales/detalle-reportecomentario-modal/detalle-reportecomentario-modal.component';
import { ReportesComentarioResueltoComponent } from './componentes/reportes-comentario-resuelto/reportes-comentario-resuelto.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DetalleReporteusuarioModalComponent } from './modales/detalle-reporteusuario-modal/detalle-reporteusuario-modal.component';
import { ReportesUsuarioResueltoComponent } from './componentes/reportes-usuario-resuelto/reportes-usuario-resuelto.component';
import { ReporteComentarioSeleccionComponent } from './componentes/reporte-comentario-seleccion/reporte-comentario-seleccion.component';
import { ReporteUsuarioSeleccionComponent } from './componentes/reporte-usuario-seleccion/reporte-usuario-seleccion.component';
import { ReporteVideoSeleccionComponent } from './componentes/reporte-video-seleccion/reporte-video-seleccion.component';
import { ConfirmacionEliminarComponent } from './modales/confirmacion-eliminar/confirmacion-eliminar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    ReportesComentariosComponent,
    ReportesVideosComponent,
    ReportesUsuariosComponent,
    DetalleReporteModalComponent,
    ReportesVideoResueltoComponent,
    DetalleReportecomentarioModalComponent,
    ReportesComentarioResueltoComponent,
    DetalleReporteusuarioModalComponent,
    ReportesUsuarioResueltoComponent,
    ReporteComentarioSeleccionComponent,
    ReporteUsuarioSeleccionComponent,
    ReporteVideoSeleccionComponent,
    ConfirmacionEliminarComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule, 
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faEye, faEyeSlash);
  }
}
