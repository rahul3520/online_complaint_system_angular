import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  UserRegn=(userData:any)=>
  {
    return this.http.post("http://localhost:8080/userRegistration",userData)
  }

  GetuserId=(userLoginInfo:any)=>
  {
    return this.http.post("http://localhost:8080/userVerify",userLoginInfo)
  }

  GetLoggedUserData=(ID:any)=>
  {
    return this.http.post("http://localhost:8080/GetUserData",ID)
  }

  AddComplaint=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addComplaint",dataToSend)
  }

  ViewUserComplaint=(userId:any)=>
  {
    return this.http.post("http://localhost:8080/viewUserComplaint",userId)
  }
}
