import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer test');
    const params = new HttpParams().set('name', 'testName');
    const h = headers.keys();
    console.log(h);
    const customReq = request.clone({
      headers: headers,
      params: params,
    });
    return next.handle(customReq);
  }
}
