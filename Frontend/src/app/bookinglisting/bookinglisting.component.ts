import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking/booking.service';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-bookinglisting',
  templateUrl: './bookinglisting.component.html',
  styleUrls: ['./bookinglisting.component.css']
})
export class BookinglistingComponent implements OnInit {

  date = new Date();
  allbooking=[{
    userid:"",
    name:"",
    hallname:"",
    date:"",
    starttime:"",
    endtime:"",
    status:""
  }];
  booking
  =[{
    userid:"",
    name:"",
    hallname:"",
    date:"",
    starttime:"",
    endtime:"",
    status:""
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
      this.allbooking = JSON.parse(JSON.stringify(data));
      this.getbookingvalid(this.allbooking);
    })
  }

  getbookingvalid(data:any){
    this.booking.pop();
    const date = new Date();
    for(var i in data){
      const bookingdate=new Date(data[i].date);
      if(date<=bookingdate){
        this.booking.push(data[i]);
      }
    }
  }

  delete(data: any) {
    console.log("here");
    this.bookingservice.deletebooking(data._id).subscribe((datas) => {
      console.log(datas);
    })
    alert("Booking canceled");
    location.pathname = ('/bookinglist');
  }

  editbooking(booking: any) {
    localStorage.setItem("editBookingId", booking._id.toString());
    console.log(booking._id.toString());
    location.pathname = ('/user-update');
  }

}
