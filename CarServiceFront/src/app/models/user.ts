export class User {
  UserId: number;
  Username: string;
  Email: string;
  Password: string;
  Name: string;
  PhoneNumber: string;

  constructor(uu: string, ue: string, up: string, un: string, uph: string) {
    this.Username = uu;
    this.Email = ue;
    this.Password = up;
    this.Name = un;
    this.PhoneNumber = uph;
  }
}
