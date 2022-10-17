import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  getbookingweek(userid:string){
    return this.http.get('http://localhost:4000/api/booking/getbookingweek/'+userid);
  }


}
