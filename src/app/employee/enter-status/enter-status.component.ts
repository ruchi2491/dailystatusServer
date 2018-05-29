import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enter-status',
  templateUrl: './enter-status.component.html',
  styleUrls: ['./enter-status.component.css']
})
export class EnterStatusComponent implements OnInit {

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
