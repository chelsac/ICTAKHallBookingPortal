import { Component, OnInit } from '@angular/core';
import { MatRecycleRows } from '@angular/material/table';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-booking-calendar',
  templateUrl:'./booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent implements OnInit {
  
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
  constructor() { }

  ngOnInit(): void {
  }

}
