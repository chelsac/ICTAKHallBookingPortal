import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking/booking.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
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
  constructor(private bookingservice:BookingService,private router: Router) { }

  ngOnInit(): void {
    this.bookingservice.getallbooking().subscribe((data) => {
      this.booking = JSON.parse(JSON.stringify(data));
      console.log(this.booking);
     
    })
  }

}
