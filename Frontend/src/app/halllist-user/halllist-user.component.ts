import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HallsService } from '../services/halls/halls.service';

@Component({
  selector: 'app-halllist-user',
  templateUrl: './halllist-user.component.html',
  styleUrls: ['./halllist-user.component.css']
})
export class HalllistUserComponent implements OnInit {
  halls = [{
    name: '',
    capacity: '',
    location: '',
    image: '',
    description: ''
  }];

  constructor(private hallsservice: HallsService, private router: Router) { }

  ngOnInit(): void {
    this.hallsservice.gethalls().subscribe((data) => {
      this.halls = JSON.parse(JSON.stringify(data));
      console.log(this.halls);
    })
  }

}
