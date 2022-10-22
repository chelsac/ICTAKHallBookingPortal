import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking/booking.service';
import { HallsService } from '../services/halls/halls.service';
@Component({

  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css'],
})
export class BookinglistComponent implements OnInit {
  halls = [{
    name: '',
    capacity: '',
    location: '',
    image: '',
    description: ''
  }];
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
    console.log(this.booking);
    return this.bookingservice.addbooking(this.booking)
    .subscribe((res)=>{
      alert("Booking succesfully added");
      location.pathname = ('/homeuser');
    })
  }

  constructor(private hallsservice: HallsService,private bookingservice:BookingService,private router: Router ) {}

  ngOnInit(): void {
    this.hallsservice.gethalls().subscribe((data) => {
      this.halls = JSON.parse(JSON.stringify(data));
      console.log(this.halls);
    })
  }
}
