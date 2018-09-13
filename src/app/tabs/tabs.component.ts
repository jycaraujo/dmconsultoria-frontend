import {Component, Input, OnInit} from '@angular/core';
import {Point} from "../points";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() point: Point;

  constructor() { }

  ngOnInit() {
    // console.log(this.point)
  }

}
