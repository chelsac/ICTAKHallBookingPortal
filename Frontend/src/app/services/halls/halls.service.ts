import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HallsService {

  addhall(data:any){
    return this.http.post<any>("http://localhost:4000/api/hall/addHall",data);
  }

  gethalls(){
    return this.http.get('http://localhost:4000/api/hall/viewHall');
  }

  deleteHall(id:any){
    console.log(id);
    return this.http.delete('http://localhost:4000/api/hall/deleteHall/'+id);
  }

  geteditHall(_id:any){

    return this.http.get('http://localhost:4000/api/hall/'+_id);
  }

  updateHall(hall:any){
    console.log(hall);
    return this.http.put('http://localhost:4000/api/hall/editHall/'+hall._id, {hall})
    .subscribe(data=> {console.log(data)})
  }

  constructor(private http:HttpClient) { }
}
