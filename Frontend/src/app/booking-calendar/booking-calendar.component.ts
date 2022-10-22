import { Component, OnInit } from '@angular/core';
import { MatRecycleRows } from '@angular/material/table';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { BookingService } from '../services/booking/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-calendar',
  templateUrl:'./booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent implements OnInit {

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


  
  public setView: View = 'Month';
  public  setDate: Date = new Date(2022, 9, 21);
  public resourceDataSource: object[] = [
    { Name:'CAM conference hall',Id:1, Color: '#ffaa00'},
    { Name: 'ABC conference hall',Id:2,Color:'#7499e1'}
  ]
  public eventObject: EventSettingsModel = {
    dataSource: [{
      Subject:"mary/ictakid",
      StartTime: new Date(2022,9,25,10,0),
      EndTime: new Date(2022,9,25,18,30),
      IsReadonly:true,
      ResourceID:1
    },
    {
      Subject:"jhon/ictakid",
      StartTime: new Date(2022,9,24,9,30),
      EndTime: new Date(2022,9,24,15,30),
      IsReadonly:true,
      ResourceID:2
    }
  ],
    fields: {
      subject: {title:'Enter NAME-ICTAKID'}
    }
  }

  public setViews: View[] = ["Day", "Week", "Month","Agenda"];
  constructor(private bookingservice:BookingService,private router: Router) { }

  ngOnInit(): void {
    this.bookingservice.getallbooking().subscribe((data) => {
      this.allbooking = JSON.parse(JSON.stringify(data));
      console.log(this.allbooking);

      this.booking.pop();
      for(var i in this.allbooking){
        if(this.allbooking[i].status=="approved"){
          this.booking.push(this.allbooking[i]);
        }
      }
      console.log(this.booking);
      
    })
  }

}
