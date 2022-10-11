import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: any;
  updateForm: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.user = this.router.getCurrentNavigation()?.extras.state;  
  }

  ngOnInit(): void {
    this.createForm();
    this.getUserDetails();
  }

  createForm() {
    this.updateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      jobTitle: ['', Validators.required]
    });
  }

  getUserDetails(){
    // this.userService.getUser(this.user._id).subscribe({
    //   next: (result: any) => {
    //     this.user= result.body;
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   }
    // });
  }


  editUser(){
    this.userService.editUser(this.user).subscribe({
      next: (result: any) => {
        this.router.navigate(['user-list']);
      },
      error: (err: any) => {
        console.log(err);
        this.router.navigate(['user-list']);
      }
    });
  }

  cancel(){
    this.router.navigate(['user-list']);
  }

}
