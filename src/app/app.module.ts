import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeecountComponent } from './employeecount/employeecount.component';
import{EmpdataService} from './empdata.service';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
const appRoutes:Routes=[
  {path:'home', component:HomeComponent},
  {path:'',redirectTo:'/home' },
  {path:'employees',component:EmployeeComponent},
  {path:'employees/:code',component:EmployeeComponent},
  {path:'**',component:PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeelistComponent,
    EmployeecountComponent,
    HomeComponent,
    PagenotfoundComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [EmpdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
