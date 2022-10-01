import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

const baseUrl = 'http://localhost:4000/api/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<HttpResponse<any>> {
    let params = new HttpParams().set('page', '0');
    params = params.append('limit', '0' );
    return this.http.get<HttpResponse<any>>(baseUrl + 'users/getUsers', { observe: 'response', 'params': params });
  }

  addUser(data: User): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(baseUrl + 'users/addUser', data, { observe: 'response' });
  }

  editUser(data: User): Observable<HttpResponse<any>> {
    return this.http.put<HttpResponse<any>>(baseUrl + 'users/editUser' + data._id, data, { observe: 'response' });
  }

  deleteUser(data: string): Observable<HttpResponse<any>> {
      return this.http.delete<HttpResponse<any>>(baseUrl + 'users/deleteUser' + data, { observe: 'response' });
  }

  //https://www.dotnettricks.com/learn/angularmaterial/datatable-crud-operations-mean-stack
  //https://www.bezkoder.com/node-express-mongodb-crud-rest-api/

}
