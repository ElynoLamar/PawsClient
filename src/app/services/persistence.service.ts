import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersistentService {
  // user store
  private static loggedIn: boolean;
  private static loggedInUser: number;

  static get(): boolean {
    return this.loggedIn;
  }

  static set(): void {
    this.loggedIn = true;
  }
  static getUser(): number {
    console.log(this.loggedInUser)
    return this.loggedInUser;
  }
  static setUser(id: number): void {
    this.loggedInUser = id;
  }
}
