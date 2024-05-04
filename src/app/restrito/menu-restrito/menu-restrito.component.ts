import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-menu-restrito',
  templateUrl: './menu-restrito.component.html',
  styleUrl: './menu-restrito.component.css'
})
export class MenuRestritoComponent {

  constructor(private _loginService: LoginService, private _router:Router){}

  logout(){
    localStorage.clear();
    this._loginService.setMostraMenu(true);
    this._router.navigate(['/login']);
  }
}