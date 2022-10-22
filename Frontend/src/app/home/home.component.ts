import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking/booking.service';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';
import { HallsService } from '../services/halls/halls.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any;
  halls = [{
    name: '',
    capacity: '',
    location: '',
    image: '',
    description: ''
  }];
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
  hallcount=0;
  allbookingcount=0;
  newbookingcount=0;
  usercount=0;
  constructor(private hallsservice: HallsService,private bookingservice:BookingService,private userService:UserService,private router: Router) { }

  ngOnInit(): void {
    this.hallsservice.gethalls().subscribe((data) => {
      this.halls = JSON.parse(JSON.stringify(data));
      this.hallcount=this.halls.length;
    })
    
    this.getUserList();

    this.bookingservice.getallbooking().subscribe((data) => {
      this.allbooking = JSON.parse(JSON.stringify(data));
      console.log(this.allbooking);
      this.allbookingcount=this.allbooking.length;
      this.bookingpending(this.allbooking);
    })
  }

  bookingpending(data:any){
    this.booking.pop();
    for(var i in data){
      if(data[i].status=="pending"){
        this.booking.push(data[i]);
      }
      // if(data[i].status=="approved"){
      // this.approvedbookingcount++;
      // }
    }
    console.log(this.booking);
    this.newbookingcount=this.booking.length;
  }

  more(){
    location.pathname = ('/admin-approval');
  }

  getUserList(){
    this.userService.getUsers().subscribe({
      next: (result: any) => {
        this.users = result.body
        this.usercount=this.users.length;
        console.log(this.usercount);
      },
      error: (err: any) => {
        console.log(err);
      }
    });

  }

}
