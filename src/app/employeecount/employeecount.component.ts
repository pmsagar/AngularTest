import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employeecount',
  templateUrl: './employeecount.component.html',
  styleUrls: ['./employeecount.component.css']
})
export class EmployeecountComponent implements OnInit {
  
  selecetedRadioButonValue:string='All';

  @Output()
countRadioButonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();
@Input()
all:number;
@Input()
male:number;
@Input()
female:number;
onRadioButtonSelectionChange(){
  this.countRadioButonSelectionChanged.emit(this.selecetedRadioButonValue);
  console.log(this.selecetedRadioButonValue)
}
  constructor() { }

  ngOnInit() {
  }

}
