import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { autenticacionGuard } from './guards/autenticacion.guard';
import { ReportesComentariosComponent } from './componentes/reportes-comentarios/reportes-comentarios.component';
import { ReportesVideosComponent } from './componentes/reportes-videos/reportes-videos.component';
import { ReportesUsuariosComponent } from './componentes/reportes-usuarios/reportes-usuarios.component';
import { ReportesVideoResueltoComponent } from './componentes/reportes-video-resuelto/reportes-video-resuelto.component';
import { ReportesComentarioResueltoComponent } from './componentes/reportes-comentario-resuelto/reportes-comentario-resuelto.component';
import { ReportesUsuarioResueltoComponent } from './componentes/reportes-usuario-resuelto/reportes-usuario-resuelto.component';
import { ReporteComentarioSeleccionComponent } from './componentes/reporte-comentario-seleccion/reporte-comentario-seleccion.component';
import { ReporteUsuarioSeleccionComponent } from './componentes/reporte-usuario-seleccion/reporte-usuario-seleccion.component';
import { ReporteVideoSeleccionComponent } from './componentes/reporte-video-seleccion/reporte-video-seleccion.component';

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [autenticacionGuard]},
  {path: 'reportes/comentarios', component: ReporteComentarioSeleccionComponent, canActivate: [autenticacionGuard]},
  {path: 'reportes/comentarios/no-resueltos', component:ReportesComentariosComponent, canActivate: [autenticacionGuard]},
  {path: 'reportes/comentarios/resueltos', component: ReportesComentarioResueltoComponent, canActivate: [autenticacionGuard]},
  
  {path: 'reportes/videos', component: ReporteVideoSeleccionComponent, canActivate: [autenticacionGuard]},
  {path: 'reportes/videos/no-resueltos', component:ReportesVideosComponent, canActivate: [autenticacionGuard]},
  {path: 'reportes/videos/resueltos', component: ReportesVideoResueltoComponent, canActivate: [autenticacionGuard]},

  {path: 'reportes/usuarios', component: ReporteUsuarioSeleccionComponent, canActivate: [autenticacionGuard]},
  {path: 'reportes/usuarios/no-resueltos', component:ReportesUsuariosComponent, canActivate: [autenticacionGuard]},
  {path: 'reportes/usuarios/resueltos', component:ReportesUsuarioResueltoComponent, canActivate: [autenticacionGuard]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
