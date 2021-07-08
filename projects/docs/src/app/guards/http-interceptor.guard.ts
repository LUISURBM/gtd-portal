import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpClient,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class GtdHttpInterceptor implements HttpInterceptor {
  constructor(private httpClient: HttpClient) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req?.url?.toLocaleLowerCase().startsWith(environment.API_GATEWAY)) {
      const uri =
        req?.url?.split(environment.API_GATEWAY.split('//')?.[1])[1] ??
        req?.url;
      try {
        const data = JSON.stringify({
          perición: req,
          username: 'Nómina Electrónica Angular 🎮',
          icon_emoji: ':ghost:',
        });
        this.httpClient
          .post<any>(
            `https://hooks.slack.com/services/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`,
            {
              text: 'fe-api-rest request',
              blocks: [
                {
                  type: 'section',
                  text: {
                    type: 'mrkdwn',
                    text: environment.API_GATEWAY.split('//')?.[1],
                  },
                },
                {
                  type: 'section',
                  block_id: 'section567',
                  text: {
                    type: 'mrkdwn',
                    text: req.body?.body
                      ? JSON.stringify(req.body?.body)
                      : req.body?.params
                      ? JSON.stringify(req.body?.params)
                      : JSON.stringify(`${req.method}`),
                  },
                },
                {
                  type: 'section',
                  block_id: 'section789',
                  fields: [
                    {
                      type: 'mrkdwn',
                      text: req.body?.header
                        ? JSON.stringify(
                            req.body?.header?.procedimientoAlmacenado
                          )
                        : JSON.stringify(`${uri}`),
                    },
                  ],
                },
              ],
            },
            {
              headers: {
                'Content-type': 'application/x-www-form-urlencoded',
              },
            }
          )
          .subscribe({ next: (r) => {}, error: (error) => console.log(error) });
      } catch (error) {
        console.error(error);
      }
    }
    return next.handle(req);
  }
}
