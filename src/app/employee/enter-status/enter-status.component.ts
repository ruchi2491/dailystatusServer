import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmployeeComponent } from '../employee.component';
// import { Dailystatus } from '../../../../models/Dailystatus';

@Component({
  selector: 'app-enter-status',
  templateUrl: './enter-status.component.html',
  styleUrls: ['./enter-status.component.css']
})
export class EnterStatusComponent implements OnInit {

   employeeid=this.employeeComponent.empid;

  // onestatus= new Dailystatus();
  onestatus={};
  constructor(private http: HttpClient, private router: Router,private employeeComponent: EmployeeComponent) {
    // this.onestatus.empid=this.employeeComponent.empid;
  }
  ngOnInit() {
    console.log("Employee id of user is in enter-status component"+ this.employeeid);
    this.onestatus = {
      "empid":this.employeeid
    };
  }

  saveBook() {
    this.http.post('/dailystatus', this.onestatus)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/dailystatus', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
