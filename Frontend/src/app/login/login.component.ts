import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  title='Hall Booking Portal';
  loginUser(item:any)
  {
    console.warn(item);
  }
  

}

  


