import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';
import { UserDeleteComponent } from '../user-delete/user-delete.component';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  user: any;
  
  constructor(
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.user = this.router.getCurrentNavigation()?.extras.state;  
   }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    let usrId = this.user?._id? this.user._id:localStorage.getItem('usrid')
    this.userService.getUser(usrId).subscribe({
      next: (result: any) => {
        this.user= result.body;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  goToEditUser(user: any){
    this.router.navigate(['user-edit'], { state: user });
  }


  goToDeleteUser(user: any){
    let usrId = this.user?._id? this.user._id:localStorage.getItem('usrid')
    const dialogRef = this.dialog.open(UserDeleteComponent, {
      width: '35vw',
      data: {'_id': usrId},
      disableClose: true
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['user-list']);
    });
  }

  back(){
    this.router.navigate(['user-list']);
  }

}
