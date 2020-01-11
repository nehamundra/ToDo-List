import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  errormessage: String;
  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
  });
  }

  submit(){
    console.log("in submit");
    
    if(this.LoginForm.controls.username.value=="admin" && this.LoginForm.controls.password.value=="admin"){
        sessionStorage.setItem('username',this.LoginForm.controls.username.value);         
        this.router.navigate(['/home']);
        this.errormessage=null;
    }
    else{
      this.errormessage="Wrong id or password"
    }
}

}
