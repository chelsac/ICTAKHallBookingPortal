import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserDeleteComponent>, 
    public router: Router,
    public userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
  }


  deleteUser(){
    if (this.data._id) {
      this.userService.deleteUser(this.data._id).subscribe({
        next: (result: any) => {
          this.closeDialog();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
