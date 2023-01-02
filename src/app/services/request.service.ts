import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient, protected router: Router,
  ) { }
  server: string = 'http://localhost:4321/api'
  //server: string = 'https://pawsapp.herokuapp.com/api/'
  protected async request(urlSuffix: string, data: any = null) {
    const endpoint = this.server + urlSuffix;
    return data ?
      lastValueFrom(this.http.post(endpoint, data, { withCredentials: true }))
      : lastValueFrom(this.http.get(endpoint, { withCredentials: true }));
  }

  protected async requestPut(urlSuffix: string, data: any) {
    const endpoint = this.server + urlSuffix;
    //console.log(endpoint)
    return lastValueFrom(this.http.put(endpoint, data, { withCredentials: true }));
  }

  protected async requestDelete(urlSuffix: string, data: any) {
    const endpoint = this.server + urlSuffix;
    //console.log(endpoint)
    return lastValueFrom(this.http.delete(endpoint, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: data,
    }));
  }

  protected async requestGeneric(endpoint: string, data: any = null, headersJSON = {}) {
    //console.log(endpoint)
    const headers = new HttpHeaders(headersJSON)
    return data ?
      lastValueFrom(this.http.post(endpoint, data, { headers: headers, withCredentials: true }))
      : lastValueFrom(this.http.get(endpoint, { withCredentials: true }));
  }

  protected handleError(error: Response | any): any {
    console.log(error)
    let errMsg: any;
    if (error instanceof Response) {
      const err = error || JSON.stringify(error);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.error.message ? { status: error.status, error: { message: error.error.message } } : error.toString();
    }
    //this.router.navigate(['500']);
    return errMsg//check
  }

}
