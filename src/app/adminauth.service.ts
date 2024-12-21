import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username2:string,password2:string){
    if(username2=="abcd" && password2=="1234"){
      sessionStorage.setItem('username2',username2);
      return true;

    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("logeed In successful")
     let user= sessionStorage.getItem('username2');

    return !(user==null);
  }
  logout(){
    sessionStorage.removeItem('username2');
  }
}
