import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../client";
import {ContentService} from "../content/content.service";
import {SidebarService} from "../sidebar/sidebar.service";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  @Input() clients: Client[];

  constructor(private contentService: ContentService,
              private sidebarService: SidebarService) { }

  ngOnInit() {
  }


  showInfo() {
    this.contentService.getProfile()
      .subscribe((data: any) => {
        this.sidebarService.setprofile.emit(data);
        this.sidebarService.changeVisibility(false);
        this.contentService.tabs_value.emit(true)
        console.log(data);
      }, err => {
        console.log(err);
      });
  }
}
