import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HallsService } from '../halls.service';

@Component({
  selector: 'app-hall-update',
  templateUrl: './hall-update.component.html',
  styleUrls: ['./hall-update.component.css']
})
export class HallUpdateComponent implements OnInit {

  hall={
    name:'',
    capacity:'',
    location:'',
    image:'',
    description:''
  };

  constructor(private hallsservice:HallsService,private router: Router) { }

  ngOnInit(): void {
    var hallId= localStorage.getItem("editHallId");
    this.hallsservice.geteditHall(hallId).subscribe((data:any)=>{
      this.hall=JSON.parse(JSON.stringify(data));
  })
  }

  update(){
    console.log(this.hall.description);
    this.hallsservice.updateHall(this.hall);
    alert("Hall Updated");
    console.log(this.hall);
    location.pathname = ('/conferenceRooms');
    
  }

}
