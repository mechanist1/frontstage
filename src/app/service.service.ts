import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  in:Boolean;
  constructor() { }
  loggedin():void{
  this.in=true;

  }
  loggedout():void{
  this.in=false;
  }
}
