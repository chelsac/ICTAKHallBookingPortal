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
  booking=[{
    userid:"",
    name:"",
    hallname:"",
    date:"",
    starttime:"",
    endtime:""
  }];
  constructor(private bookingservice:BookingService,private userservice:UserService,private router: Router) { }

  ngOnInit(): void {
    var emailid= localStorage.getItem("emailid");
    console.log(emailid);
    this.userservice.getbooking(emailid).subscribe((data:any)=>{
      console.log(data.body.userid);
      this.getbookingdetails(data.body.userid);
  })
    
  }

  getbookingdetails(userid:string){
    this.bookingservice.getbookingweek(userid).subscribe((data) => {
      this.booking = JSON.parse(JSON.stringify(data));
      console.log(this.booking);
    })
  }
}
