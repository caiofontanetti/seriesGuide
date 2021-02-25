import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  counter1: number = 0;
  counter2: number = 0;
  counter3: number = 0;
  counter4: number = 0;

  constructor(private _http: HttpService) { }


  countClick1() {
    this.counter1 += 1;
  }
  countClick2() {
    this.counter2 += 1;
  }
  countClick3() {
    this.counter3 += 1;
  }
  countClick4() {
    this.counter4 += 1;
  }

  ngOnInit(): void {
    
  }

}
