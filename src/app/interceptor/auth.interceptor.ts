import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  console.log("interceptor: " + req.url);
  if(req.url.includes('auth/login')) next(req);

  const auth = inject(AuthService);
  const token = auth.getToken();

  let headers = new HttpHeaders();
  if (token) {
    headers = new HttpHeaders({
      Authorization: token
    })
  }

  const newReq = req.clone({
    withCredentials: true,
    headers
  })


  return next(newReq)
}

