/**
 * FPI E-Invoice API
 * The FPI E-Invoice API allows your applications to retrieve products, customers and manage electronic document exchange.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: soporte@fpicolombia.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { RequestTAnticiposDto } from '../model/models';
import { ResponseTAnticiposDto } from '../model/models';
import { ResponseTListAnticiposDto } from '../model/models';
import { ResponseTstring } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {
    AnticiposServiceInterface
} from './anticipos.serviceInterface';



@Injectable({
  providedIn: 'root'
})
export class AnticiposService implements AnticiposServiceInterface {

    protected basePath = 'http://localhost:8092';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * delete Anticipo in the system.
     * @param id Id Anticipo
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE37(id: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ResponseTstring>;
    public deleteUsingDELETE37(id: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ResponseTstring>>;
    public deleteUsingDELETE37(id: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ResponseTstring>>;
    public deleteUsingDELETE37(id: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE37.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.delete<ResponseTstring>(`${this.configuration.basePath}/nomina-general/anticipos/${encodeURIComponent(String(id))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * find by id Anticipo in the system.
     * @param id Id Anticipo
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByIdUsingGET37(id: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ResponseTAnticiposDto>;
    public findByIdUsingGET37(id: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ResponseTAnticiposDto>>;
    public findByIdUsingGET37(id: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ResponseTAnticiposDto>>;
    public findByIdUsingGET37(id: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET37.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<ResponseTAnticiposDto>(`${this.configuration.basePath}/nomina-general/anticipos/${encodeURIComponent(String(id))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all Anticipo in the system.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getListUsingGET1(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ResponseTListAnticiposDto>;
    public getListUsingGET1(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ResponseTListAnticiposDto>>;
    public getListUsingGET1(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ResponseTListAnticiposDto>>;
    public getListUsingGET1(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<ResponseTListAnticiposDto>(`${this.configuration.basePath}/nomina-general/anticipos/list`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all Anticipo in the system by DeduccionesId.
     * @param deduccionesId DeduccionesId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listFindAllDeduccionesUsingGET4(deduccionesId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ResponseTListAnticiposDto>;
    public listFindAllDeduccionesUsingGET4(deduccionesId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ResponseTListAnticiposDto>>;
    public listFindAllDeduccionesUsingGET4(deduccionesId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ResponseTListAnticiposDto>>;
    public listFindAllDeduccionesUsingGET4(deduccionesId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (deduccionesId === null || deduccionesId === undefined) {
            throw new Error('Required parameter deduccionesId was null or undefined when calling listFindAllDeduccionesUsingGET4.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<ResponseTListAnticiposDto>(`${this.configuration.basePath}/nomina-general/anticipos/list/${encodeURIComponent(String(deduccionesId))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all Anticipo in the system by DevengadosId.
     * @param devengadosId DevengadosId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listFindAllDevengadosUsingGET14(devengadosId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ResponseTListAnticiposDto>;
    public listFindAllDevengadosUsingGET14(devengadosId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ResponseTListAnticiposDto>>;
    public listFindAllDevengadosUsingGET14(devengadosId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ResponseTListAnticiposDto>>;
    public listFindAllDevengadosUsingGET14(devengadosId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling listFindAllDevengadosUsingGET14.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<ResponseTListAnticiposDto>(`${this.configuration.basePath}/nomina-general/anticipos/list/${encodeURIComponent(String(devengadosId))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * save a Anticipo in the system.
     * @param dto dto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUsingPOST37(dto: RequestTAnticiposDto, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ResponseTAnticiposDto>;
    public saveUsingPOST37(dto: RequestTAnticiposDto, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ResponseTAnticiposDto>>;
    public saveUsingPOST37(dto: RequestTAnticiposDto, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ResponseTAnticiposDto>>;
    public saveUsingPOST37(dto: RequestTAnticiposDto, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST37.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.post<ResponseTAnticiposDto>(`${this.configuration.basePath}/nomina-general/anticipos`,
            dto,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * update Anticipo in the system.
     * @param dto dto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT37(dto: RequestTAnticiposDto, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ResponseTAnticiposDto>;
    public updateUsingPUT37(dto: RequestTAnticiposDto, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ResponseTAnticiposDto>>;
    public updateUsingPUT37(dto: RequestTAnticiposDto, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ResponseTAnticiposDto>>;
    public updateUsingPUT37(dto: RequestTAnticiposDto, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT37.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.put<ResponseTAnticiposDto>(`${this.configuration.basePath}/nomina-general/anticipos`,
            dto,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
