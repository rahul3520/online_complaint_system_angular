import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserRegnComponent } from './user-regn/user-regn.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfilepageComponent } from './user-profilepage/user-profilepage.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AddComplaintPageComponent } from './add-complaint-page/add-complaint-page.component';
import { UserPortalComponent } from './user-portal/user-portal.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"adminPage",
    component:AdminPageComponent
    
  },
  {
    path:"adminNavbar",
    component:AdminNavbarComponent
  },
  {
    path:"userRegn",
    component:UserRegnComponent
  },
  {
    path:"userLogin",
    component:UserLoginComponent
  },
  {
    path:"userProfile",
    component:UserProfilepageComponent
  },
  {
    path:"registerComplaint",
    component:AddComplaintPageComponent
  },
  {
    path:"userPortal",
    component:UserPortalComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminPageComponent,
    AdminNavbarComponent,
    UserRegnComponent,
    UserLoginComponent,
    UserProfilepageComponent,
    UserNavbarComponent,
    AddComplaintPageComponent,
    UserPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
