import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent implements OnInit {

  constructor() { }
  bottomRanking: any[] = Array(15).fill(0).map((x, i) => i);
  ngOnInit(): void {
  }

}
