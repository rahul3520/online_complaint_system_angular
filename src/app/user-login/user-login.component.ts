import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  emailId=""
  password=""

  constructor(private api:ApiService,private route:Router){}


  userVerify=()=>
  {
    let data:any={"emailId":this.emailId,"password":this.password}


    console.log(data)

    this.api.GetuserId(data).subscribe(

      (response:any)=>
      {
          console.log(response)

          if (response.status=="success") {
            
            
          let userId=response.Id
          console.log(userId)

          localStorage.setItem("userInfo",userId)

          this.route.navigate(["/userProfile"])
            

          } else {

            alert("Invalid credentials!")
            this.emailId=""
            this.password=""
            
          }

      }
    )

  }

}
