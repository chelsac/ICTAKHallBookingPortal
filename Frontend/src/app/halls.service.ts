import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HallsService {

  addhall(data:any){
    return this.http.post<any>("http://localhost:4000/addhall",data);
  }

  gethall(){
    return this.http.get('http://localhost:4000/halls');
  }

  constructor(private http:HttpClient) { }
}
