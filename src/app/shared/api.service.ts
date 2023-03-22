import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }






  getEmployee(){
    let url ="http:/localhost:8000/employees";
    return this.http.get<any>(url);
  }
}
