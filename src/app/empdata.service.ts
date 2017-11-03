import { Injectable } from '@angular/core';
import {Empl} from './empl'

@Injectable()
export class EmpdataService {

getEmployees():Empl[]{
  return  [ 
    {empid:'545159',name:'Sagar',gender:'Male'},
  {empid:'545167',name:'Vijay',gender:'Male'},
  {empid:'546238',name:'Vivek',gender:'Male'},
  {empid:'548796',name:'Jamba',gender:'Female'},
  {empid:'545454',name:'Lamba',gender:'Female'}
];
}
  constructor() { }

}
