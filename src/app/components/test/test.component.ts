import { Component, OnInit } from '@angular/core';
import { TestService } from "../../services/test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [
  ]
})
export class TestComponent implements OnInit {

  test_result: any;

  constructor(private testService: TestService) {
    this.test_result = "Hola Mundo desde el component TEST de Angular";
  }

  ngOnInit(): void {
    this.testService.getHello().subscribe(data => {
      console.log(data);
      this.test_result = data.data;
    });
  }

}
