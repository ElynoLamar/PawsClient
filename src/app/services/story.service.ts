import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from './request.service';


@Injectable({
  providedIn: 'root'
})
export class StoryService extends RequestService {

  constructor(http: HttpClient, router: Router) {
    super(http, router);
  }
  async generateStory(prev: string, curr: string): Promise<any> {
    let response: any;
    try {
      response = await this.request(`/story?prevState=${prev}&currState=${curr}`) as any;
      console.log(response)
    }
    catch (error) {
      console.log(error)
      this.handleError(error);
    }
    return response;
  }

}
