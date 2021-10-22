import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.auth.getAuthorizationToken();
    if (!authToken){
      return next.handle(req);
    }
    let authReq = req;
    if (!req.url.endsWith('/Token')) {
      authReq = req.clone({
        headers: req.headers.set('Authorization',`Bearer ${authToken}`)
      });
    }
    return next.handle(authReq);
  }
}
