import { Component, style } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../data.service";
import { v4 as uuid } from 'uuid'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.css']

})

export class LoginComponent {
    token: string = uuid();
    username = '';
    password = '';
    message = '';
    empid = "";
    employees: any;
    constructor(private router: Router, private http: HttpClient, private data: DataService) {
        console.log("token is:", this.token);
    }

    ngOnInit() {
        console.log("---------1");
        this.http.get('/api/employee').subscribe(data => {
            console.log(data);
            this.employees = data;
            console.log(this.employees);
        });
        this.data.currentEmployeeid.subscribe(empid => this.message = empid)
    }


    login() {
        console.log("Inside login");
        console.log(this.employees);
        this.employees.forEach(element => {
            if (this.username === element.emailid && this.password === '12345') {
                this.empid = element.empid;
                //console.log("In login component"+this.empid);
                this.data.changeEmployeeID(this.empid);
                this.message = "Login sucessfull";
                // console.log("Role is"+element.Role);
                if (element.Role === 'employee') {
                    this.doPut();
                    this.router.navigateByUrl('/employee');
                }
                else {
                    this.doPut();
                    this.router.navigateByUrl('/manager');
                }
            }
            else {
                this.message = "Please enter correct username and password";
            }
        });

    }
    newEmployeeID() {
        console.log("In login component" + this.empid);
        this.data.changeEmployeeID(this.empid);
    }

    doPut() {
        this.http.put('/api/employee' + this.empid, { "token": this.token }).subscribe(data => {
            this.employees.token = data;
        });
        // this.data.currentEmployeeid.subscribe(empid => this.message = empid)   
    }
}