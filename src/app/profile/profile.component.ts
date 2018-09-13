import {Component, Input, OnInit} from '@angular/core';
import {SidebarService} from "../sidebar/sidebar.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() profile: any;
  @Input() show_profile: Boolean;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    console.log(this.profile)
  }


  backtoSearch() {
    this.sidebarService.changeVisibility(true);
  }
}
