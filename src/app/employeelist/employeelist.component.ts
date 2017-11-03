import { Component, OnInit } from '@angular/core';
import {Empl} from '../empl'
import {EmpdataService} from '../empdata.service'

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  srbv:string='All';
 // private _employeeService:EmpdataService;
employees:Empl[];
gettotalemployeescount():number{
  return this.employees.length;
}
getmaleemployeescount():number{
  return this.employees.filter(e=>e.gender==="Male").length;
}
getfemaleemployeescount():number{
  return this.employees.filter(e=>e.gender==="Female").length;
}
onEmployeeCountSelectionChanged(  srbvp:string):void{
this.srbv=srbvp;
}

  constructor(private _employeeService:EmpdataService) { 
    
  }

  ngOnInit() {
    this.employees=this._employeeService.getEmployees();
  }

}
