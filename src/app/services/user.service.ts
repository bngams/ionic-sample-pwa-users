import { Injectable } from "@angular/core";
import { Users } from "../models/user";
import { USERS_MOCK } from "../mocks/users.mock";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsersWithMock(): Users {
    return USERS_MOCK;
  }

  getUsers(): Observable<any> {
    return of(null);
  }

  demosObservable(): void {
    const observable = new Observable<number>((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    let total = 0;
    const observer = {
      next: (x: number) => { total += x; console.log('Donnée reçue', x)},
      error: (e: any) => { },
      complete: () => { console.log('Le total est ', total)},
    }

    // le susbcribe attends un objet observer
    observable.subscribe(observer);

    // ou une fonction comme le next
    observable.subscribe((data) => {
      console.log('data', data)
    });
  }

}
