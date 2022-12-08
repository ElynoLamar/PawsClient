
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  items: any[] = [

    {
      name: 'Home',
      routerLink: '/home'
    },
    {
      name: 'MyPaw',
      routerLink: '/mypaw'
    },
    {
      name: 'Status',
      routerLink: '/status'
    },
    {
      name: 'Ranking',
      routerLink: '/ranking'
    },
  ]
  bottomItems: any[] = [

    {
      name: 'Shop',
      routerLink: '/shop'
    },
    {
      name: 'Contact',
      routerLink: '/contact'
    },
  ]

  constructor() { }

  ngOnInit() {

  }

}