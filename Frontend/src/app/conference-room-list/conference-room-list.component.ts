import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HallsService } from '../halls.service';

@Component({
  selector: 'app-conference-room-list',
  templateUrl: './conference-room-list.component.html',
  styleUrls: ['./conference-room-list.component.css']
})
export class ConferenceRoomListComponent implements OnInit {
  halls=[{
    name:'',
    capacity:'',
    location:'',
    image:'',
    description:''
  }];

  constructor(private hallsservice:HallsService,private router: Router) { }

  ngOnInit(): void {
    this.hallsservice.gethall().subscribe((data)=>{
      this.halls=JSON.parse(JSON.stringify(data));
      console.log(this.halls);
    })

  }

}
