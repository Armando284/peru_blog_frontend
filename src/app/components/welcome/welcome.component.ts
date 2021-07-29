import { Component, OnInit } from '@angular/core';
import { WelcomeService } from 'src/app/services/welcome.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [
  ]
})
export class WelcomeComponent implements OnInit {

  postList: any[];

  constructor(private _welcomeService: WelcomeService, private _userService: UserService) {
    this.postList = [];
    _welcomeService.getPosts().then(data => this.postList = data);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }


}
