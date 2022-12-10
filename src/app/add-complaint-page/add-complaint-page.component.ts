import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-complaint-page',
  templateUrl: './add-complaint-page.component.html',
  styleUrls: ['./add-complaint-page.component.css']
})
export class AddComplaintPageComponent {

  // userId:any=""
  complaint=""

  constructor(private api:ApiService){}

  RegisterComplaint=()=>
  {

    // this.userId=localStorage.getItem("userInfo")

    let data:any={"userId":localStorage.getItem("userInfo"),"complaint":this.complaint}

    console.log(data)

    this.api.AddComplaint(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status=="success")
        {
          alert("complaint registered successfully!")
          // this.userId=""
          this.complaint=""
        }
        else
        {
          alert("Failed to register complaint")
        }
      }
    )
  }

}
