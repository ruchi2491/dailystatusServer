import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.css']
})
export class EmployeeStatusEnterComponent implements OnInit {

  @Input() employeeid;

  onestatus={};
  constructor(private http: HttpClient, private router: Router) {

  }
  ngOnInit() {
    console.log("Employee id of user is"+this.employeeid);
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
