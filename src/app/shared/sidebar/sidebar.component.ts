import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[] = [];

  constructor(private sidebarService:SidebarService){
    this.menuItems = this.sidebarService.menu;
    console.log('menuItems',this.menuItems)
  }

  ngOnInit(): void {}

}
