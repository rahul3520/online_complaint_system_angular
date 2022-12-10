import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-regn',
  templateUrl: './user-regn.component.html',
  styleUrls: ['./user-regn.component.css']
})
export class UserRegnComponent {

  name=""
  dob=""
  phoneNo=""
  address=""
  emailId=""
  password=""

  constructor(private api:ApiService){}

  UserRegister=()=>
  {
    let userData:any={"name":this.name,"dob":this.dob,"phoneNo":this.phoneNo,"address":this.address,"emailId":this.emailId,"password":this.password}

    console.log(userData)

    this.api.UserRegn(userData).subscribe(
      (respone:any)=>
      {
        console.log(respone)
        if(respone.status=="success")
        {
          alert("User Registered!")
          this.name=""
          this.dob=""
          this.phoneNo=""
          this.address=""
          this.emailId=""
          this.password=""
        }
        else
        {
          alert("Failed to register user")
        }
      }
    )

  }

  userData:any=[]

}
