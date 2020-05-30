import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Booking} from '../models/booking';
import {BookingService} from '../services/booking.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  formModel={
    BookingDate: '',
    CarModel:'',
    CarProblem:'',
  }

  b: Booking;
  constructor(private router: Router,
              private serviceB: BookingService) { }

  ngOnInit(): void {
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  onSubmitBooking(form:NgForm){

    this.b =new Booking(
      form.controls['BookingDate'].value.toString(),
      form.controls['CarModel'].value.toString(),
      form.controls['CarProblem'].value.toString(),
      false,
      false,
      false,
      1
    );

    this.serviceB.addBooking(this.b).subscribe(
      (res:any)=>{
        console.log(res);
        this.router.navigateByUrl('/my-bookings');
      },
      err=>{
        console.log(err);
      }
    );

  }

}
