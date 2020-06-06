import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Booking} from '../models/booking';
import {BookingService} from '../services/booking.service';
import {NgForm} from '@angular/forms';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import {DataService} from '../services/data.service';
import {FacadeService} from '../services/facade.service';

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
  uDetails: any;
  bookings: any;
  message: string;
  constructor(private router: Router,
              private facadeService: FacadeService,
              private serviceData: DataService) { }

  goToAddApproved(id:number){
    this.facadeService.updateBookingA(id,true).subscribe(
      res=>{
        console.log(res);
      },
      err=>
      {
        console.log(err);
      }
    );
    this.router.navigate(['/status']);
  }

  goToAddWorking(id:number){
    this.facadeService.updateBookingW(id,true).subscribe(
      res=>{
        console.log(res);
      },
      err=>
      {
        console.log(err);
      }
    );
    this.router.navigate(['/status']);
  }

  goToAddReady(id:number){
    this.facadeService.updateBookingR(id,true).subscribe(
      res=>{
        console.log(res);
      },
      err=>
      {
        console.log(err);
      }
    );
    this.router.navigate(['/status']);
  }


  ngOnInit(): void {
    this.facadeService.getUserProfile().subscribe(
      res=>{
        this.uDetails = res;
        console.log(this.uDetails);
      },
      err=>{
        console.log(err);
      }
    );

    this.facadeService.getAllBookings().subscribe(
      res=>{
        this.bookings = res;
        console.log(res);
      },
      err=>{
        console.log(err);
      }

    );

    this.serviceData.currentMessage.subscribe(message => this.message = message)

    // let btnA = document.getElementById("coolbuttonA");
    // let btnW = document.getElementById("coolbuttonW");
    // let btnR = document.getElementById("coolbuttonR");
    //
    // if (btnA) {
    //   btnA.addEventListener("click", (e: Event) => this.goToAddApproved());
    // }
    // if (btnW) {
    //   btnW.addEventListener("click", (e: Event) => this.goToAddWorking());
    // }
    // if (btnR) {
    //   btnR.addEventListener("click", (e: Event) => this.goToAddReady());
    // }

  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  onMy(id:number) {
    this.serviceData.changeMessage(id.toString());
    this.router.navigate(['/my-bookings']);
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

    this.facadeService.addBooking(this.b).subscribe(
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
