import { Component } from '@angular/core';
import {EmployeeComponent} from  './employee/employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  vl:string='S';
  heading:string='Employee Details';
  tern:string=null;
  image:string='http://aka-minions-2015.gloryone.pl/au/gfx/images/delivery/minion_1.png';
  propbind:string='https://usercontent2.hubstatic.com/8272035_f520.jpg';
  showbtn:boolean=false;
  rdclass:string='rdcls';
  itlclass:boolean=true;
  onclick():void{
    console.log("Clicked");
  }
  

}
