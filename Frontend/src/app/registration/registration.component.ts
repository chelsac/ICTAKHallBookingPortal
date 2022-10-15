import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  registerForm: any;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['user'],
      jobTitle: ['', Validators.required]
    });
  }

  register() {

    if (this.registerForm.invalid) {
      return;
    }
    
    this.userService.addUser(this.registerForm.value).subscribe({
      next: (result: any) => {
        this.router.navigate(['/user-list']);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}

//https://www.itsolutionstuff.com/post/angular-13-property-name-comes-from-an-index-signature-so-it-must-be-accessed-with-requiredexample.html
