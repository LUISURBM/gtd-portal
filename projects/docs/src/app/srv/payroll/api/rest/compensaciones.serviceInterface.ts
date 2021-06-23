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
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { RequestTCompensacionDto } from '../model/models';
import { ResponseTCompensacionDto } from '../model/models';
import { ResponseTListCompensacionDto } from '../model/models';
import { ResponseTstring } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface CompensacionesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete Compensacion in the system.
     * 
     * @param id Id Compensacion
     */
    deleteUsingDELETE44(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * find by id Compensacion in the system.
     * 
     * @param id Id Compensacion
     */
    findByIdUsingGET44(id: string, extraHttpRequestParams?: any): Observable<ResponseTCompensacionDto>;

    /**
     * List all Compensacion in the system by DevengadosId.
     * 
     * @param devengadosId DevengadosId
     */
    listFindAllDevengadosUsingGET18(devengadosId: string, extraHttpRequestParams?: any): Observable<ResponseTListCompensacionDto>;

    /**
     * List all Compensacion in the system.
     * 
     */
    listFindAllUsingGET27(extraHttpRequestParams?: any): Observable<ResponseTListCompensacionDto>;

    /**
     * save a Compensacion in the system.
     * 
     * @param dto dto
     */
    saveUsingPOST44(dto: RequestTCompensacionDto, extraHttpRequestParams?: any): Observable<ResponseTCompensacionDto>;

    /**
     * update Compensacion in the system.
     * 
     * @param dto dto
     */
    updateUsingPUT44(dto: RequestTCompensacionDto, extraHttpRequestParams?: any): Observable<ResponseTCompensacionDto>;

}