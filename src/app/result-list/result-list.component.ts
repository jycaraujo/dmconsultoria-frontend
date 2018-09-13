import { Component, OnInit } from '@angular/core';
import {ResultListService} from "./result-list.service";
import {Client} from "../client";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  clients: Client[];

  constructor(private resService: ResultListService) { }

  ngOnInit() {
    this.getRecords();
  }

  getRecords = () => {
    this.resService.getRecords()
      .subscribe((data: Client[]) => {
        this.clients = data;
        console.log(data);
      }, err => {
        console.log(err);
      });
  }

}
