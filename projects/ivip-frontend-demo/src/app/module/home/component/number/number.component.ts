import {Component, OnInit} from '@angular/core';

export interface IFE {
  name: string;
}

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
