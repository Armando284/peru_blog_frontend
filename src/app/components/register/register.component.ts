import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router) {
    this.registerForm = new FormGroup({
      'nombre': new FormControl('', [Validators.required]),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'password': new FormControl('', Validators.required),
      'repit_pass': new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  register() {
    this.router.navigate(['/dashboard']);
  }


}
