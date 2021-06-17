import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators'
import { AppStateService } from './app-state.service';

/**
 * This class is for intercepting http requests. When a request starts, we set the loadingSub property
 * in the LoadingService to true. Once the request completes and we have a response, set the loadingSub
 * property to false. If an error occurs while servicing the request, set the loadingSub property to false.
 * @class {HttpRequestInterceptor}
 */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(
    private appState: AppStateService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.appState.toggleLoading;
    return next.handle(request)
      .pipe(catchError((err) => {
        this.appState.toggleLoading;
        return err;
      }))
      .pipe(map<any, any>((evt: any) => {
        if (evt instanceof HttpResponse) {
          this.appState.toggleLoading;
        }
        return evt;
      }));
  }
}
