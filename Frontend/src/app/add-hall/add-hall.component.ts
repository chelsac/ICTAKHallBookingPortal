import { Component, OnInit } from '@angular/core';
import { HallsService } from '../services/halls/halls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hall',
  templateUrl: './add-hall.component.html',
  styleUrls: ['./add-hall.component.css']
})

export class AddHallComponent implements OnInit {
  hall={
    name:'',
    capacity:'',
    location:'',
    image:'',
    description:''
  };
  addhallfn(){
    console.log(this.hall);
    return this.hallsservice.addhall(this.hall)
    .subscribe((res)=>{
      alert("Hall succesfully added");
      location.pathname = ('/conferenceRooms');
    })
  }
  constructor(private hallsservice:HallsService,private router: Router ) { }

  ngOnInit(): void {
  }

}
