import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="avanit" && password=="12345"){
      sessionStorage.setItem('username',username);

      

      return true;
      
    }else{
      
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("Doctor logeed In successful")
     let user= sessionStorage.getItem('username');

    return !(user==null);
  }
  logout(){
    sessionStorage.removeItem('username');
  }

}
