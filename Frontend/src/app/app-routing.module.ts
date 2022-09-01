import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
const routes: Routes = [
  { path: 'userList', component: UserListComponent },
  { path: "login", component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path:'home',component:HomeComponent},
  { path:'bookinglist',component:BookinglistComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
