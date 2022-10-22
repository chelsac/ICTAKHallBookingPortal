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
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['',[Validators.required,Validators.minLength(10)]],
      role: ['', Validators.required],
      jobTitle: ['', Validators.required],
      department:['',Validators.required],
      address: ['',Validators.required],
      district:['',Validators.required],
      state:['',Validators.required],
      pinCode:['',Validators.required]
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

