import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BookingService} from '../services/booking.service';
import {UserService} from '../services/user.service';
import {DataService} from '../services/data.service';
import {FacadeService} from '../services/facade.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  bookings: any;
  //userD: any;
  message:string;
  color:string;

  constructor(private router:Router,
              private facadeService: FacadeService,
              private data:DataService) { }

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


    this.facadeService.getAllBookingsForUser(+this.message).subscribe(
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

  mouseEnter(div : string,bw:boolean,br:boolean){

    if(bw){
      this.color = 'orange';
    } else{
      if (br)
        this.color = 'green';
    }
  }

}
