import {Component, OnInit} from '@angular/core';
import {SidebarService} from "../sidebar/sidebar.service";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.clean.subscribe(data =>{

    });
  }

}
