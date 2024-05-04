import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Loja de Games.';
  mostrarMenu:boolean = true;

  constructor(private _loginService: LoginService){}
  ngOnInit():void{
    this._loginService.getMostramenu().subscribe(
        res => {this.mostrarMenu =res }
    )
  }
  ngOnDestroy(){
    localStorage.clear();
  }
}

