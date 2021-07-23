import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'password': new FormControl('', Validators.required),
      'remember': new FormControl(false)
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/dashboard']);
  }

}

// Las interfaces deben ir en archivos aparte!!!!
interface Usuario {
  email: string,
  password: string,
  remember: boolean
}
