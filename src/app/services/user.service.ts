import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from './request.service';


@Injectable({
  providedIn: 'root'
})
export class UserService extends RequestService {

  constructor(http: HttpClient, router: Router) {
    super(http, router);
  }
  async getUsers(): Promise<any> {
    let response: any;
    try {
      response = await this.request(`/users`) as any;
    }
    catch (error) {
      console.log(error)
    }
    return response;
  }
  async getUser(id: number): Promise<any> {
    let response: any;
    try {
      response = await this.request(`/user?id_user=${id}`) as any;
    }
    catch (error) {
      console.log(error)
    }
    return response;
  }
  async getUserBundle(id: number): Promise<any> {
    let response: any;
    try {
      response = await this.request(`/user/bundle/?id_user=${id}`) as any;
    }
    catch (error) {
      console.log(error)
    }
    return response;
  }
  async getUnownedUserBundle(id: number): Promise<any> {
    let response: any;
    try {
      response = await this.request(`/user/bundle/unowned/?id_user=${id}`) as any;
    }
    catch (error) {
      console.log(error)
    }
    return response;
  }
  async BuyBundle(price: number, bundle: number, user: number): Promise<any> {
    let response: any;
    try {
      response = await this.request(`/user/bundle/buy/?price=${price}&id_bundle=${bundle}&id_user=${user}`) as any;
    }
    catch (error) {
      console.log(error)
    }
    return response;
  }

}
