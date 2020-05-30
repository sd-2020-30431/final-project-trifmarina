export class Booking {
  BookingId:number;
  BookingDate:string;
  CarModel: string;
  CarProblem: string;
  Approved: boolean;
  Working: boolean;
  Ready:boolean;
  UserId: number

  constructor(bDate:string,bCarModel:string, bCarProb: string, bA:boolean, bW:boolean, bR:boolean, bU: number) {
    this.BookingDate = bDate;
    this.CarModel = bCarModel;
    this.CarProblem = bCarProb;
    this.Approved = bA;
    this.Working = bW;
    this.Ready = bR;
    this.UserId = bU;
  }

}
