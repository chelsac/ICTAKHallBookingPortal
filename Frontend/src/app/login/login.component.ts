import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  title='Hall Booking Portal';
  loginForm: any;
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
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
    this.authService.checkUser(this.loginForm.value).subscribe({
      next: (result: any) => {
        this.authService.loggedUserRole = result.body.userCredentials.role;
        localStorage.setItem('Token', result.body.token);
        localStorage.setItem('emailid', this.loginForm.value.email);
        localStorage.setItem('userLoginStatus', 'true');
        localStorage.setItem('role', result.body.userCredentials.role);
        if(this.authService.loggedUserRole=='admin'){
          //navigate to adminhome
          this.router.navigate(['home']);
        }else{
          //navigate to userhome
          this.router.navigate(['homeuser']);
        }
      },
      error: (err: any) => {
        console.log(err);
        this.loginForm.reset();
       this.error = err.error.msg;
      }
    });
  }

}

  


