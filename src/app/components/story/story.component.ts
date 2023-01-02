import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor(private storyService: StoryService,) { }
  stories: any[] = []
  states: any[] = [
    { label: 'happy', value: 'happy' },
    { label: 'neutral', value: 'neutral' },
    { label: 'sad', value: 'sad' },
    { label: 'gone', value: 'gone' }
  ];
  json: any = JSON
  prevState: any
  currState: any
  ngOnInit(): void {
  }
  async generateStory() {
    console.log(this.prevState, this.currState)
    this.stories = await this.storyService.generateStory(this.prevState, this.currState)
  }
}
