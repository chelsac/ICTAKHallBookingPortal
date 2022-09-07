import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { HalllistUserComponent } from './halllist-user/halllist-user.component';


const routes: Routes = [
  { path: '',     component: LoginComponent },
  { path: 'home' , component: HomeComponent},
  { path: 'user-list', component: UserListComponent },
  { path: "login", component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {path:'halllist-user', component:HalllistUserComponent}
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
