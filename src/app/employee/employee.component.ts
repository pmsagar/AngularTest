import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  firstName:string;
  lastName:string;
  gender:string;
  Age:number;
  shwdtls:boolean=true;
  getname():string{
      return this.firstName+' '+this.lastName;
      }
  constructor() { 
    this.firstName='Ganesh';
    this.lastName='Vinayaka';
    this.Age=0;
    this.gender='Male';
  }
  
  showdetails():void{
    this.shwdtls=!this.shwdtls;
  }

  ngOnInit() {
    
  }

}
