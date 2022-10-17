import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking/booking.service';
@Component({

  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css'],
})
export class BookinglistComponent implements OnInit {
  booking
  ={
    userid:"",
    name:"",
    hallname:"",
    date:"",
    starttime:"",
    endtime:"",
    status:"pending"
  };

  addbookingfn(){
    var date=new  Date(this.booking.date);
    this.booking.date=date.toLocaleDateString();
    console.log(this.booking.date);
    return this.bookingservice.addbooking(this.booking)
    .subscribe((res)=>{
      alert("Booking succesfully added");
      // location.pathname = ('/conferenceRooms');
    })
  }

  constructor(private bookingservice:BookingService,private router: Router ) {}

  ngOnInit(): void {}
}
