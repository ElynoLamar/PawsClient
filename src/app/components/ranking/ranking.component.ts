import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor() { }
  bottomRanking :any[]= Array(15).fill(0).map((x,i)=>i);
  ngOnInit(): void {
  }

}
