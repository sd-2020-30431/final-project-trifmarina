import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {Booking} from '../models/booking';

const httpOpt = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient,
              private conf: ConfigService) {

  }

  addBooking(it:Booking){
    return this.http.post(`${this.conf.getApiURI()}/api/Booking/Add`,it,httpOpt);
  }

  getAllBookings(){
    return this.http.get(`${this.conf.getApiURI()}/api/Booking`);
  }


}
