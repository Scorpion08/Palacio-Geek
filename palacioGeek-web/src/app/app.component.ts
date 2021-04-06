import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Login } from '../model/login';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'palacioGeek-web';

  login = {} as Login;
  usuarios: Login[] = [];

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.getLogins();
  }


  getLogins() {
    this.loginService.getLogins().subscribe((logins: Login[]) => {
      this.usuarios = logins;
    });
  }


}
