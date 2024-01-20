import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(protected httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get<any>('http://localhost:8090/leaves', {observe:'response'})
  }
}
