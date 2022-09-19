import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { HalllistUserComponent } from './halllist-user/halllist-user.component';
import { ConferenceRoomListComponent } from './conference-room-list/conference-room-list.component';
import { UsersComponent } from './users/users.component';
import { AdminApprovalComponent } from './admin-approval/admin-approval.component';
import { AddHallComponent } from './add-hall/add-hall.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    BookinglistComponent,
    HomeComponent,
    FooterComponent,
    UsersComponent,
    HalllistUserComponent,
    ConferenceRoomListComponent,
    AdminApprovalComponent,
    AddHallComponent 
],
 
imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
      
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
