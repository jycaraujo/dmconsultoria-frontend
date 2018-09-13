import {Component, OnInit} from '@angular/core';
import {SearchService} from "./search.service";
import {Client} from "../client";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  profile: any;
  clients: Client[];
  filteredItems: any;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.getRecords();
  }

  getRecords = () => {
    this.searchService.getRecords()
      .subscribe((data: Client[]) => {
        this.clients = data;
        this.assignCopy();//when you fetch collection from server.
        console.log(data);
      }, err => {
        console.log(err);
      });
  }
  assignCopy(){
    this.filteredItems = Object.assign([], this.clients);
  }
  filterItem(event){
    let value = ''
    if(!isNullOrUndefined(event.target.value))
      value = event.target.value

    console.log(value)
    if(!value) this.assignCopy();
    this.filteredItems = Object.assign([], this.clients).filter(
      item => item.nome.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
    console.log(this.filteredItems)
  }

}
