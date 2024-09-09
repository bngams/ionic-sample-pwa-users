import { UserService } from "./user.service";
import { HttpClient } from "@angular/common/http";
import { USERS_MOCK } from "../mocks/users.mock";
import { of } from "rxjs";

describe('UserService', () => {
  let userService: UserService;
  let fakeHttpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    // I ask jasmine to create an "interceptor" for object HttpClient, and get method calls
    fakeHttpClient = jasmine.createSpyObj('HttpClient', ['get']);
    userService = new UserService(fakeHttpClient);
  });

  it('...', async () => {
    const wantedResult = USERS_MOCK;
    // intercept http request and return fake value
    fakeHttpClient.get.and.returnValue(of(wantedResult))
    await userService.getUsers().subscribe(response => {
      expect(response).toEqual(wantedResult);
    })

  });

});
