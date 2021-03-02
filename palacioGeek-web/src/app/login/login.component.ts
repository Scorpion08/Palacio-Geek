import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../model/Usuario.model';
import { DefaultRequestService } from '../../service/default-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // usuario: Usuario = new Usuario();

  constructor(private usuarioService : DefaultRequestService, private router: Router) { }

  ngOnInit(): void {

  }

  validaLogin(){
  //   this.usuarioService.validaLogin(this.usuario).subscribe(resultado => {
  //     if(resultado?.isValidated){
  //       this.router.navigate(['/home'])
  //     }else{
  //       alert('Usuário e senha incorretos!');
  //     }
  //   },erro => {
  //     alert('Requisição com erro ' )
  //   })
  }

}
