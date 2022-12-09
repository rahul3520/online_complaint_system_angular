import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username=""
  password=""

  constructor(private route:Router){}

  adminLoginCheck=()=>
  {
    if(this.username=="admin" && this.password=="12345")
    {
      alert("valid login")

      this.route.navigate(["/adminPage"])

    }
    else{
      alert("Invalid Login")
      this.username=""
      this.password=""

    }
  }

}
