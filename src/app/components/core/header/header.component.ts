import { Component, OnInit, ViewChild } from '@angular/core';
import { PersistentService } from '../../../services/persistence.service';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  usersList: any[] = []
  userDropdown: boolean = false
  selectedUser: any
  constructor(private router: Router, private userService: UserService) {
    this.loggedIn = PersistentService.get();
  }
  async ngOnInit(): Promise<void> {
    this.loggedIn = PersistentService.get();
    this.selectedUser = PersistentService.getUser();
    this.usersList = await this.userService.getUsers()
    console.log(this.selectedUser)
  }
  login() {
    this.loggedIn = true;
    console.log(this.selectedUser)
    PersistentService.set();
    PersistentService.setUser(this.selectedUser);
  }
  navigate(path: string) {
    this.router.navigate([path]);
  }
  over() {
    console.log("Mouseover called");
    this.userDropdown = true;
  }

  out() {
    console.log("Mouseout called");
    this.userDropdown = false;
  }
}
