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

  getallbooking(){
    return this.http.get('http://localhost:4000/api/booking/getallbooking');
  }

  addbooking(data:any){
    return this.http.post<any>("http://localhost:4000/api/booking/addbooking/",data);
  }

  deletebooking(id:any){
    console.log(id);
    return this.http.delete('http://localhost:4000/api/booking/deletebooking/'+id);
  }

  geteditbooking(_id:any){

    return this.http.get('http://localhost:4000/api/booking/'+_id);
  }

  updatebooking(booking:any){
    console.log(booking);
    return this.http.put('http://localhost:4000/api/booking/editBooking/'+booking._id, {booking})
    .subscribe(data=> {console.log(data)})
  }


}
