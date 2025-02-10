import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup;

  constructor(private authService:AuthService) {
    this.loginForm= new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
    
  }

  login(){
    this.authService.Login(this.loginForm.value).subscribe((data:any)=>{
      localStorage.setItem('token',data.token);
      alert("Login Success")
      console.log(data);
    },(err:any)=>{
      alert("Login Failed")
    }
    )
   
  }

}
