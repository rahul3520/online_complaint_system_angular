import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-profilepage',
  templateUrl: './user-profilepage.component.html',
  styleUrls: ['./user-profilepage.component.css']
})
export class UserProfilepageComponent {

  userId:any=""

  searchData:any=[]

  constructor(private api:ApiService){

    this.userId=localStorage.getItem("userInfo")

    let data:any={"id":this.userId}

    this.api.GetLoggedUserData(data).subscribe(

      (response:any)=>
      {
        console.log(response)
        
        this.searchData=response

      }

    )
  }

}
