import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking/booking.service';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
    this.bookingservice.getallbooking().subscribe((data) => {
      this.allbooking = JSON.parse(JSON.stringify(data));
      console.log(this.allbooking);
      this.bookingpending(this.allbooking);
    })
  }

  bookingpending(data:any){
    this.booking.pop();
    for(var i in data){
      if(data[i].status=="pending"){
        this.booking.push(data[i]);
      }
    }
    console.log(this.booking);
  }

  more(){
    location.pathname = ('/admin-approval');
  }

}
