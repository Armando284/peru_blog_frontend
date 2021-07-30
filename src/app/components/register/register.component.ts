import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router, private _userService: UserService) {
    this.registerForm = new FormGroup({
      'rolId': new FormControl('', [Validators.required]),
      'name': new FormControl('', [Validators.required]),
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
    this._userService.createUser(this.registerForm.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/dashboard']);
      },
      err => console.log(err)
    );
    // this.router.navigate(['/dashboard']);
  }


}
