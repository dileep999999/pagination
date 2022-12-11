import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor {
  authToken: any;

  constructor() { }

  loadToken() {
    this.authToken = localStorage.getItem('token');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadToken();
    let headerdata:any = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
    if (this.authToken) {
      headerdata['Authorization'] = this.authToken;
    }

    let TokenizedReq = req.clone({
      setHeaders: headerdata
    })
    return next.handle(TokenizedReq);
  }
}
