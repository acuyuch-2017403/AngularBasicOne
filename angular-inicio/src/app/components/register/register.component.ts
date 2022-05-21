import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  /*paso3*/
  user: UserModel; 

  constructor() {
    this.user = new UserModel('','','','','','','');
   }

  ngOnInit(): void {
  }

  /*Retorno*/
  /*Creamos un metodop*/

  /*Verificas si esta de manera correcta*/
  register(){
    console.log(this.user);
  }
   




}
