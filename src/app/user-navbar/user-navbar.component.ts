import { Component } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {

  userId:any=""

  constructor(){

    this.userId=localStorage.getItem("userInfo")

  }

  RemoveId=()=>
  {
    localStorage.removeItem("userInfo")
    localStorage.clear
  }

}
