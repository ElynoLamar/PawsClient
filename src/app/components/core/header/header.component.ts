import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  openNav() {

    /**
      document.getElementById("mySidebar").style.width = "14%";
      document.getElementById("main").style.marginLeft = "14%";
      document.getElementById("main").style.width = "86% !important";
      document.getElementById("leftContainer").style.width = "40%";
      toggle = 1
    */
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() {
    /**
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("main").style.width = "100% !important";
      document.getElementById("leftContainer").style.width = "100%";
      toggle = 0
    */
  }

}
