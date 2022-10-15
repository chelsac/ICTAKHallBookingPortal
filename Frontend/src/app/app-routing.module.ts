import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { HalllistUserComponent } from './halllist-user/halllist-user.component';
import { ConferenceRoomListComponent } from './conference-room-list/conference-room-list.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { BookinglistingComponent } from './bookinglisting/bookinglisting.component';
import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AdminApprovalComponent } from './admin-approval/admin-approval.component';
import { AddHallComponent } from './add-hall/add-hall.component';
import { HallUpdateComponent } from './hall-update/hall-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserViewComponent } from './user-view/user-view.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './models/role';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'homeuser', component: HomeuserComponent},
  { path: 'booking', component: BookinglistComponent }, 
  { path: 'halllist-user', component:HalllistUserComponent},
  { path: 'bookinglist', component:BookinglistingComponent}, 


  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]} }, //only admin
  { path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]} }, //only admin
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]} }, //only admin
  { path: 'user-edit', component: UserEditComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]} }, //only admin
  { path: 'user-delete', component: UserDeleteComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]} }, //only admin
  { path: 'user-view', component: UserViewComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]} }, //only admin

  { path: 'conferenceRooms', component:ConferenceRoomListComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]} }, //only admin
  { path: 'add-hall', component:AddHallComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]}}, //only admin
  { path: 'hallupdate' ,component:HallUpdateComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]}}, //only admin
  { path: 'admin-approval', component: AdminApprovalComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]}} //only admin
  
  
  // { path: 'users',component:UsersComponent, //only admin
  //   children:[
  //     { path: '', component: UserListComponent },
  //     { path: 'user-list', component: UserListComponent},    
  //     { path: 'registration', component: RegistrationComponent }
  //   ]
  // },

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
