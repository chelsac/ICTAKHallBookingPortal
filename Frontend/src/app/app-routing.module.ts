import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { ConferenceRoomListComponent } from './conference-room-list/conference-room-list.component';


const routes: Routes = [
  { path: '',     component: LoginComponent },
  { path: 'home' , component: HomeComponent},
  { path: 'user-list', component: UserListComponent },
  { path: "login", component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'conferenceRooms', component:ConferenceRoomListComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
