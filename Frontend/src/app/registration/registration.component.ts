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

  roleList = [ {id:1, name:"admin"},
  {id:2,name:"user"}
  ];
 
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
      role: ['', Validators.required],
      jobTitle: ['', Validators.required],
      mobileno: ['',[Validators.required,Validators.minLength(10)]],
      address: ['',Validators.required],
      district:['',Validators.required],
      state:['',Validators.required],
      pincode:['',Validators.required],
      ictakid:['',Validators.required],
      department:['',Validators.required]
    });
  }

  onSubmit() {
    
  }

}

//https://www.itsolutionstuff.com/post/angular-13-property-name-comes-from-an-index-signature-so-it-must-be-accessed-with-requiredexample.html
