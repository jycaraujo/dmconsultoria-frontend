import {Component, Input, OnInit} from '@angular/core';
import {Point} from "../points";
import {SidebarService} from "../sidebar/sidebar.service";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() point: Point;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.clean.subscribe(data =>{
      this.point = {
        "total":0,
        "utilizados":0,
        "expirados":0
      }
    })
  }

}
