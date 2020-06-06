import {Injectable, Injector} from '@angular/core';
import {UserService} from './user.service';
import {BookingService} from './booking.service';
import {Booking} from '../models/booking';

@Injectable()
export class FacadeService {

  private _userService: UserService;
  public get userService(): UserService{
    if (!this._userService){
      this._userService = this.injector.get(UserService);
    }
    return this._userService;
  }

  private _bookingService: BookingService;
  public get bookingService(): BookingService{
    if (!this._bookingService){
      this._bookingService = this.injector.get(BookingService);
    }
    return this._bookingService;
  }

  constructor(private injector: Injector) { }

  login(formData){
    return this.userService.login(formData);
  }

  getUserProfile(){
    return this.userService.getUserProfile();
  }

  addBooking(it:Booking){
    return this.bookingService.addBooking(it);
  }

  getAllBookings(){
    return this.bookingService.getAllBookings();
  }

  getAllBookingsForUser(id:number){
    return this.bookingService.getAllBookingsForUser(id);
  }

  updateBookingA(id:number,val:boolean){
    return this.bookingService.updateBookingA(id,val);
  }

  updateBookingW(id:number,val:boolean){
    return this.bookingService.updateBookingW(id,val);
  }

  updateBookingR(id:number,val:boolean){
    return this.bookingService.updateBookingR(id,val);
  }

}
