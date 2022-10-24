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
  booking:any = [];


  
  public setView: View = 'Month';
  public  setDate: Date = new Date(2022, 9, 21);
  public resourceDataSource: object[] = [
    { Name:'CAM Conference Hall',Id:1, Color: '#ffaa00'},
    { Name: 'AVR Conference Hall',Id:2,Color:'#7499e1'}
  ]
  public eventObject: EventSettingsModel = {
    dataSource: [{
      Subject:"Mary",
      StartTime: new Date(2022,9,24,17,45),
      EndTime: new Date(2022,9,24,18,45),
      IsReadonly:true,
      ResourceID:1
    },
    {
      Subject:"Mary",
      StartTime: new Date(2022,9,26,22,45),
      EndTime: new Date(2022,9,27,19,45),
      IsReadonly:true,
      ResourceID:1
    },
    {
      Subject:"Mary",
      StartTime: new Date(2022,9,24,22,30),
      EndTime: new Date(2022,9,24,23,30),
      IsReadonly:true,
      ResourceID:1
    },
    {
      Subject:"Mary",
      StartTime: new Date(2022,9,22,23,45),
      EndTime: new Date(2022,9,23,12,45),
      IsReadonly:true,
      ResourceID:2
    }
    ],
    fields: {
      subject: {title:'Enter NAME'}
    }
  }

  public setViews: View[] = ["Day", "Week", "Month","Agenda"];
  constructor(private bookingservice:BookingService,private router: Router) { }

  ngOnInit(): void {
    console.log(this.eventObject);  
    this.bookingservice.getallbooking().subscribe((data:any) => {
     // this.allbooking = JSON.parse(JSON.stringify(data));
      //console.log(this.allbooking);

     // this.booking.pop();
     
     for(var i in data){
       if(data[i].status=="approved"){
         console.log(data[i].date.split("/"));
         let dateArr = data[i].date.split("/")
          let startArr = data[i].starttime.split(":")
          let endArr = data[i].endtime.split(":")
          let starttime = '('+dateArr[2]+','+dateArr[0]+','+dateArr[1]+','+startArr[0]+','+startArr[1]+')'
          let endtime = '('+dateArr[2]+','+dateArr[0]+','+dateArr[1]+','+endArr[0]+','+endArr[1]+')'
        
          this.booking.push(
            { 
              Subject: data[i].name,
              StartTime: starttime,
              EndTime: endtime,
              IsReadonly: true,
              
            }
          );

       }
     }
     // console.log(this.booking);
   //  debugger;
     this.eventObject.dataSource=this.booking;
    })
  }

}
