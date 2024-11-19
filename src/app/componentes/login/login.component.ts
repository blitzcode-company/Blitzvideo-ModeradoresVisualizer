import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { StatusService } from '../../servicios/status.service';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MensajeService } from '../../servicios/mensaje.service';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

enum HttpStatusCode {
  Unauthorized = 401,
  BadRequest = 400,
  NoAuthorized = 405
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginError: boolean = false;
  public loginAlerta: string = '';
  showPassword: boolean = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  public loginStatus: boolean = false;
  usuarioRegistradoExitosamente: boolean = false;
  serverIp = environment.authApiUrl;
  username: string = '';
  password: string = '';

  defaultMensajeDeError: string = 'Error de red. Por favor, inténtalo de nuevo más tarde.';

  static mensajesDeError: { [key: number]: string } = {
    [HttpStatusCode.Unauthorized]: 'Usuario o contraseña incorrectos.',
    [HttpStatusCode.BadRequest]: 'Por favor, verifica tus datos.',
    [HttpStatusCode.NoAuthorized]: 'Este usuario no pertenece al grupo de moderadores',

  };

  private subscription!: Subscription;

  constructor(
    private api: AuthService,
    private router: Router,
    private status: StatusService,
    private titleService: Title,
    private mensaje: MensajeService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Login - Blitzvideo Moderadores');
    this.subscription = this.mensaje.usuarioRegistrado$.subscribe(
      (registradoExitosamente: boolean) => {
        this.usuarioRegistradoExitosamente = registradoExitosamente;
        this.loginAlerta = '';
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  sendLogin(credentials:any) {
    return this.api.login(credentials).subscribe(
      (res: any) => {
        this.status.isLoggedIn = true;
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.usuarioRegistradoExitosamente = false;
        this.loginAlerta = LoginComponent.mensajesDeError[error.status] || this.defaultMensajeDeError;
      }
    );
  }
  
  closeAlert(event?: Event): void {
    if (event) {
      event.stopPropagation();  
    }
    this.loginAlerta = '';
    this.usuarioRegistradoExitosamente = false;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(form: NgForm) {
      if (form.valid) {
        this.sendLogin(form.value)
      }
  }
}
