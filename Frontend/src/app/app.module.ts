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
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { FooterComponent } from './footer/footer.component';
import { HalllistUserComponent } from './halllist-user/halllist-user.component';
import { ConferenceRoomListComponent } from './conference-room-list/conference-room-list.component';
import { BookinglistingComponent } from './bookinglisting/bookinglisting.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AdminApprovalComponent } from './admin-approval/admin-approval.component';
import { AddHallComponent } from './add-hall/add-hall.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HallUpdateComponent } from './hall-update/hall-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { MessageComponent } from './message/message.component';
import { HttpConfigInterceptor } from './Interceptor/auth_interceptor';
import { ErrorInterceptor } from './Interceptor/error_interceptor';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { UserViewComponent } from './user-view/user-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




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
    ConferenceRoomListComponent,
    BookinglistingComponent,
    UsersComponent,
    HalllistUserComponent,
    UserEditComponent ,
    AdminApprovalComponent,
    AddHallComponent,
    HallUpdateComponent,
    UserDeleteComponent,
    MessageComponent,
    HomeuserComponent,
    UserHeaderComponent,
    AdminHeaderComponent, 
    UserViewComponent 
  ],
 
imports: [ 

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FontAwesomeModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
