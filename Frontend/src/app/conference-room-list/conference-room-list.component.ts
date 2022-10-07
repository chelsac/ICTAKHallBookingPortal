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

  delete(data:any){
    this.hallsservice.deleteHall(data._id).subscribe((datas)=>{
      console.log(datas);
    })
    alert("Hall Deleted");
    location.pathname = ('/conferenceRooms');
  }

  editHall(hall:any){
    localStorage.setItem("editHallId", hall._id.toString());
    location.pathname = ('/hallupdate');
}


  constructor(private hallsservice:HallsService,private router: Router) { }

  ngOnInit(): void {
    this.hallsservice.gethall().subscribe((data)=>{
      this.halls=JSON.parse(JSON.stringify(data));
      console.log(this.halls);
    })

  }

}
