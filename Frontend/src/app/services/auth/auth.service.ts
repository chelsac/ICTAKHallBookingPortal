import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cred } from 'src/app/models/user';

const baseUrl = 'http://localhost:4000/api/';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  loggedUserRole: String;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  checkUser(data: Cred): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(baseUrl + 'login/checkUser', data, { observe: 'response' });
  }

  logout(){
    localStorage.removeItem('Token');
    localStorage.removeItem('emailid');
    localStorage.removeItem('userLoginStatus');
    localStorage.removeItem('role');
    this.router.navigate(['login']);
  }
  
}
