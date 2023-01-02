import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from './request.service';


@Injectable({
  providedIn: 'root'
})
export class CatService extends RequestService {

  constructor(http: HttpClient, router: Router) {
    super(http, router);
  }
  async getUsersCat(id: any): Promise<any> {
    let response: any;
    try {
      response = await this.request(`/user-cat/?id_user=${id}`) as any;
    }
    catch (error) {
      console.log(error)
    }
    return response;
  }
}
