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
      this.get7day(this.allbooking);
    })
  }


  get7day(data:any){
    const startdate = new Date();
    const enddate = new Date();
    enddate.setDate(enddate.getDate() + 7);
    const arr=this.getDatesInRange(startdate,enddate);
    this.booking.pop();
    for(var i in data){
      for(var j in arr){
        // console.log(data[i].date +"data");
        // console.log(arr[j] +"arr");
        console.log(data[i].date);
        console.log(arr[j]);
        if(data[i].date==arr[j]){
          console.log(data[i].date);
          console.log(arr[j]);
          this.booking.push(data[i]);
          console.log(this.booking);
        }
        
      }
      
    }

    
    
  }

  getDatesInRange(startDate:Date, endDate:Date) {
    const date = new Date(startDate.getTime());
  
    const dates = [];
  
    while (date <= endDate) {
      dates.push((new Date(date)).toLocaleDateString());
      date.setDate(date.getDate() + 1);
    }
  
    return dates;
  }

  delete(data: any) {
    console.log("here");
    this.bookingservice.deletebooking(data._id).subscribe((datas) => {
      console.log(datas);
    })
    alert("Booking canceled");
    location.pathname = ('/homeuser');
  }
}
