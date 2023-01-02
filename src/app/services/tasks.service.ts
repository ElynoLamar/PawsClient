import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from './request.service';


@Injectable({
  providedIn: 'root'
})
export class TasksService extends RequestService {

  constructor(http: HttpClient, router: Router) {
    super(http, router);
  }
  async getUsersTasks(id: any): Promise<any> {
    let response: any;
    try {
      response = await this.request(`/user-task/?id_user=${id}`) as any;
    }
    catch (error) {
      console.log(error)
    }
    return response;
  }
  async updateUsersTasks(user: any, task: any): Promise<any> {
    let response: any;
    try {
      response = await this.request(`/task/user/update/?id_user=${user}&id_task=${task}`) as any;
    }
    catch (error) {
      console.log(error)
    }
    return response;
  }

}
