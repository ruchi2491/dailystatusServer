import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.css']
})
export class EmployeeStatusComponent implements OnInit {

  allstatus: any;
  employees:any;
  selectedOption: string;
  printedOption: string;
  selectedDate:string;
  printedDate:string;
  showTable1=false;
  showTable2=false;
  constructor(private route: ActivatedRoute,private http: HttpClient) {
   }

  ngOnInit() {
    // this.http.get('/dailystatus').subscribe(data => {
    //   this.allstatus = data;
    // });
    
      this.http.get('/employee').subscribe(data => {
        this.employees = data;
    });
  }

  getStatusDetail(id) {
    this.http.get('/dailystatus/'+id).subscribe(data => {
      this.allstatus = data;
    });
  }
  
  getStatusDetailWithDate(id,date) {
    this.http.get('/dailystatus/'+id+"/"+date).subscribe(data => {
      this.allstatus = data;
    });
  }

  getStatusWithId() {
    this.showTable2=true;
    this.printedOption = this.selectedOption;
    console.log(this.printedOption);
    console.log(this.selectedOption);
    this.getStatusDetail(this.printedOption);
  }

  getStatusWithDateAndId(){
    this.showTable1=true;
    this.printedOption = this.selectedOption;
    console.log(this.printedOption);
    console.log(this.selectedOption);
    this.printedDate=this.selectedDate;
    console.log(this.printedDate);
    console.log(this.selectedDate);
    this.getStatusDetailWithDate(this.printedOption,this.selectedDate);
  }
}
