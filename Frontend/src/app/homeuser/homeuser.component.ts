import { Component, OnInit } from '@angular/core';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import { BookingService } from '../services/booking/booking.service';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {
  userid={
    userid:'',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    jobTitle: ''
  };
  users="";
  booking={};
  constructor(private bookingservice:BookingService,private userservice:UserService,private router: Router) { }

  ngOnInit(): void {
    var emailid= localStorage.getItem("emailid");
    console.log(emailid);
    this.userservice.getbooking(emailid).subscribe((data:any)=>{
      console.log(data.body.userid);
  })
    
  }



}
