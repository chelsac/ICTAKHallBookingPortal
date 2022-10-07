import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  title='Hall Booking Portal';
  loginForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.createForm();
  }
 
  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  loginUser()
  {
    if (this.loginForm.invalid) {
      return;
    }
    this.userService.checkUser(this.loginForm.value).subscribe({
      next: (result: any) => {
        //this.userService.isLoggedIn=true;
        this.router.navigate(['halllist-user']);
      },
      error: (err: any) => {
        console.log(err);
       // this.userService.isLoggedIn=false;
        this.loginForm.reset();
       // this.error = err.error.msg;
      }
    });
  }
  

}

  


