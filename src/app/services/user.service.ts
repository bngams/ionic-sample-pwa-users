import { Injectable } from "@angular/core";
import { Users } from "../models/user";
import { USERS_MOCK } from "../mocks/users.mock";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsersWithMock(): Users {
    return USERS_MOCK;
  }
  
}
