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





const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },

  { path: 'booking', component: BookinglistComponent },
  { path: 'bookinglist',component:BookinglistingComponent},

  { path:'halllist-user', component:HalllistUserComponent},
  { path:'hallupdate' ,component:HallUpdateComponent},
  { path: 'conferenceRooms', component:ConferenceRoomListComponent },
  { path: 'bookinglist', component: BookinglistComponent },
  { path: 'admin-approval', component: AdminApprovalComponent},
  { path: 'add-hall', component:AddHallComponent},
  { path: 'users',component:UsersComponent,
  children:[
    { path: '', component: UserListComponent },
    { path: 'user-list', component: UserListComponent},    
    { path: 'registration', component: RegistrationComponent }
  ]},
  {path: 'user-edit', component: UserEditComponent},
  { path: 'user-list', component: UserListComponent },
    // { path: 'registration', component: RegistrationComponent }
  ]






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
