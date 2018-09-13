import {Component, OnInit} from '@angular/core';
import {SidebarService} from "./sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  show_search: Boolean;
  show_profile: Boolean;

  profile: any;

  constructor(private sidebarService: SidebarService) {
    this.show_search = !this.show_search;
    this.show_profile = !this.show_search;
  }

  ngOnInit() {
    // this.changeSidebar();
    this.sidebarService.setprofile.subscribe(data =>{
      this.profile = data;
    });
    this.sidebarService.vis.subscribe(data => {
      this.changeSidebar();
    })
  }

  changeSidebar = () => {
    this.show_search = !this.show_search;
    this.show_profile = !this.show_search;
  }



}
