import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking/booking.service';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';
import { HallsService } from '../services/halls/halls.service';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  booking
  ={
    _id:"",
    userid:"",
    name:"",
    hallname:"",
    date:"",
    starttime:"",
    endtime:"",
    status:""
  };
  halls = [{
    name: '',
    capacity: '',
    location: '',
    image: '',
    description: ''
  }];
  bookingId="id"
  bookdate=new Date();

  constructor(private hallsservice: HallsService,private bookingservice:BookingService,private userservice:UserService,private router: Router) { }

  ngOnInit(): void {
    var bookingId= localStorage.getItem("editBookingId");
    this.bookingservice.geteditbooking(bookingId).subscribe((data:any)=>{
      this.booking=JSON.parse(JSON.stringify(data));
      console.log( this.booking);
      this.bookdate=new Date(this.booking.date);
  })

  this.hallsservice.gethalls().subscribe((data) => {
    this.halls = JSON.parse(JSON.stringify(data));
    console.log(this.halls);
  })

  }

  update(){
    this.booking.date=this.bookdate.toLocaleDateString();
    this.bookingservice.updatebooking(this.booking);
    console.log(this.booking);
    alert("Booking Updated");
    location.pathname = ('/homeuser');
    
  }

  cancel(){
    location.pathname = ('/homeuser');
  }

}
