import { Component, OnInit } from '@angular/core';
import { WelcomeService } from 'src/app/services/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [
  ]
})
export class WelcomeComponent implements OnInit {

  postList: any[];

  constructor(private _welcomeService: WelcomeService) {
    this.postList = [];
    _welcomeService.getPosts().then(data => this.postList = data);
  }

  ngOnInit(): void {
  }


}
