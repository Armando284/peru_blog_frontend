import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  copyDate: Date;

  constructor() {
    this.copyDate = new Date();
  }

  ngOnInit(): void {
  }

}
