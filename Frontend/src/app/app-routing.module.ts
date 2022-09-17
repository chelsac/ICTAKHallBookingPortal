import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { HalllistUserComponent } from './halllist-user/halllist-user.component';
import { ConferenceRoomListComponent } from './conference-room-list/conference-room-list.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './user-view/user-view.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {path:'halllist-user', component:HalllistUserComponent},
  { path: 'conferenceRooms', component:ConferenceRoomListComponent },
  { path: 'bookinglist', component: BookinglistComponent },
  { path: 'users',component:UsersComponent,
  children:[
    { path: '', component: UserListComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'registration', component: RegistrationComponent },
    {path:'user-view',component:UserViewComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
