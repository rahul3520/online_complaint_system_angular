import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent {

  joinedData:any=[]

  constructor(private api:ApiService){

    this.api.ViewAllComplaints().subscribe(

      (response)=>
      {
        console.log(response)
        this.joinedData=response
      }
    )
  }

}
