import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getList():Observable<any>{
    return <Observable<any>> this.http.get('http://localhost:3100/');
  }

  editList(data):Observable<any>{
    return <Observable<any>> this.http.post('http://localhost:3100/edit',data);
  }

  getUsers():Observable<any>{
    return <Observable<any>> this.http.get("http://localhost:3100/users");
  }
}
