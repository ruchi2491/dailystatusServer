
import { Component, style } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    empId = "";
    emailId = "";
    empName = "";
    password = "";
    role = "";
    message;

    onReset() {
        this.empId = "";
        this.emailId = "";
        this.empName = "";
        this.password = "";
        this.role = "";
    }
    onSubmit(){
        
        console.log("EmpID is:"+this.empId +"Email Id is"+ this.emailId +"Employee name is:"+ this.empName +"Password is" +this.password +"role is"+ this.role);
        this.empId = "";
        this.emailId = "";
        this.empName = "";
        this.password = "";
        this.role = "";
        this.message="Data inserted sucessfully!!!";
    }
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);
    
      matcher = new MyErrorStateMatcher();
    
    
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }
  