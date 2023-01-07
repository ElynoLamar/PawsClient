import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: any[] = []
  firstPlace: any
  secondPlace: any
  thirdPlace: any
  othersPlaces: any[] = []
  bottomRanking: any[] = Array(15).fill(0).map((x, i) => i);
  otherUsers: any[] = [
    { id: 10, name: 'Cat Owned 1', points: 100 },
    { id: 11, name: 'Cat Owned 2', points: 400 },
    { id: 12, name: 'Cat Owned 3', points: 440 },
    { id: 13, name: 'Cat Owned 4', points: 320 },
    { id: 14, name: 'Cat Owned 5', points: 100 },
    { id: 15, name: 'Cat Owned 6', points: 670 },
    { id: 16, name: 'Cat Owned 7', points: 0 },
  ]
  ngOnInit(): void {
    this.reload()
  }
  sort_by_id() {
    return function (elem1: any, elem2: any) {
      if (elem1.id < elem2.id) {
        return -1;
      } else if (elem1.id > elem2.id) {
        return 1;
      } else {
        return 0;
      }
    };
  }
  async reload() {
    this.users = await this.userService.getUsers()
    this.users.push(...this.otherUsers)
    // this.users.sort(this.sort_by_id())
    this.users.sort(function (a, b) {
      return (a.points - b.points);
    });
    this.users.reverse();
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].skin)
        this.users[i].image = `../../../../assets/images/Bundles/${this.users[i].skin}/happy.png`
      else
        this.users[i].image = `../../../../assets/images/Bundles/orange/happy.png`

    }
    this.firstPlace = this.users.shift()
    this.secondPlace = this.users.shift()
    this.thirdPlace = this.users.shift()
    this.othersPlaces = this.users
  }
}
