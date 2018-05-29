import { Component } from "@angular/core";
import { DataService } from "../data.service";

@Component({
    selector:"app-employee",
    templateUrl:"./employee.component.html",
     styleUrls:['employee.component.css']
})
export class EmployeeComponent{
  empid;
  constructor(private data:DataService){

  }
  ngOnInit(){
    this.data.currentEmployeeid.subscribe(empid => this.empid = empid)
    console.log("In employee component"+this.empid);
  }
}