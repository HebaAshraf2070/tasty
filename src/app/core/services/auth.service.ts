import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _HttpClient: HttpClient) { }

  // fetchdata func,, post
  sendform(userdata: object): Observable<any> {
    return this._HttpClient.post(`http://upskilling-egypt.com:3001/contact`, userdata);
  }


  // fetchdata func,, get
  getreceipes(): Observable<any> {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`);
  }

}