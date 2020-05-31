import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BookingService} from '../services/booking.service';
import {UserService} from '../services/user.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  bookings: any;
  //userD: any;
  message:string;

  constructor(private router:Router,
              private serviceB: BookingService,
              private data:DataService,
              private serviceU: UserService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)

    // this.serviceU.getUserProfile().subscribe(
    //   res=>{
    //     this.userD = res;
    //     console.log(this.userD);
    //   },
    //   err=>{
    //     console.log(err);
    //   }
    // );


    this.serviceB.getAllBookingsForUser(+this.message).subscribe(
      res=>{
        this.bookings = res;
        //console.log(this.bookings.Approved);
        console.log(res);
      },
      err=>{
        console.log(err);
      }

    );
  }

}
