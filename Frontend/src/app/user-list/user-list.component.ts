import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';
import { UserDeleteComponent } from '../user-delete/user-delete.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;

  constructor(
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUserList();
  }


  getUserList(){
    this.userService.getUsers().subscribe({
      next: (result: any) => {
        this.users = result.body
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  goToEditUser(user: any){
    this.router.navigate(['user-edit'], { state: user._id });
  }


  goToDeleteUser(user: any){
    const dialogRef = this.dialog.open(UserDeleteComponent, {
      width: '35vw',
      data: {'_id': user._id},
      disableClose: true
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.getUserList();
    });
  }

}
