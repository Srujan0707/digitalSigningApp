import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router,
 
  ) { }

  ngOnInit(): void {
  }
  dataCaptureOfLoginForm( loginForm: any ){
    console.log(loginForm.value.emailAddress);  //testing purpose
    console.log(loginForm.value.loginPassword); //testing purpose
    this.router.navigate(['/home']);
    }
  
}
