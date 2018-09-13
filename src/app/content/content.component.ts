import { Component, OnInit } from '@angular/core';
import {ContentService} from "./content.service";
import {Client} from "../client";
import {Point} from "../points";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  point: Point;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.getPoints();
  }

  getPoints = () =>{
    this.contentService.getPoints()
      .subscribe((data: Point) => {
        this.point = data;
        console.log(data);
      }, err => {
        console.log(err);
      });
  }

}
