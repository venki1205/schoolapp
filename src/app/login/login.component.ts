import { Component, Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent {
    loginForm: FormGroup;
  
    constructor( private authService: AuthService,  private router: Router) {
    this.loginForm= new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
    
  }

  login(){
    console.log(this.loginForm);
    this.authService.login(this.loginForm.value).subscribe((data:any)=>{
      localStorage.setItem('token',data.token);
      console.log(data);
      this.router.navigate(['/dashboard']);
      alert("Login Success")
      
      
    },(err:any)=>{
      alert("Login Failed")
    }
    )
   
  }

}
