import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.css']
})
export class UserPortalComponent {

  complaintList:any=[]

  constructor(private api:ApiService)
  {
    let data:any={"userId":localStorage.getItem("userInfo")}
    console.log(data)

    this.api.ViewUserComplaint(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        this.complaintList=response
      }
    )
  }

}
