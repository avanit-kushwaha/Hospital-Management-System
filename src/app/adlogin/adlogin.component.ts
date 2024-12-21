import { Component } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrl: './adlogin.component.css'
})
export class AdloginComponent {
  username:string="";
  password:string="";

  inValidLogi=false;

  constructor(private adloginService:AdminauthService,private router:Router){}

  checkLogin(){
    if(this.adloginService.authenticate(this.username,this.password)){
      this.router.navigate(['admin']);
      this.inValidLogi=false;
    }else{
      this.inValidLogi=true;
      alert("Wrong Credentials !");
      this.router.navigate(['home']);
    }
  }
}
