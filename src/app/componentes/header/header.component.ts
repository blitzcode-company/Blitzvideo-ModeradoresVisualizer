import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { StatusService } from '../../servicios/status.service';
import { AuthService } from '../../servicios/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private router:Router, 
    public status:StatusService,
    private api:AuthService,
){}    

  authApiUrl = environment.authApiUrl;

  public loggedIn: boolean=false;

    ngOnInit() {
      this.obtenerUsuario();
    }

  usuario:any;
  canal:any;
  nombre: string = '';


  obtenerUsuario() {
    this.api.obtenerDatosDelUsuario().subscribe(
      (data) => {
        this.usuario = data.user; 
       
      },
      (error) => {
        console.error('Error al obtener los datos del usuario', error);
      }
    );
  }
 


  obtenerURLImagen() {
    return this.usuario.foto ? this.usuario.foto : '../../../assets/images/user.png';
  }



  logout() {
    localStorage.removeItem('accessToken');
    console.log('accessToken eliminada');
    this.status.isLoggedIn = false;
    this.router.navigate(['/']);
    
  }
  redirectToLogin() {
    this.router.navigate(['/']);
  }

  isDropdownOpen = false;

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isDropdownOpen = false;
    }
  }


}
