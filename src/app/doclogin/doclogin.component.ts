import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {


  username:string="";
  password:string="";

  inValidLogi=false;

  constructor(private router:Router,private docauthService:DocauthService){}

  checkLogin(){
    if(this.docauthService.authenticate(this.username,this.password)){
      
      this.router.navigate(['docdash']);
      this.inValidLogi=false;
      
    }else{
      this.inValidLogi=true;
      alert("Wrong credentials !");
      this.router.navigate(['home']);
      
    }
  }
}
