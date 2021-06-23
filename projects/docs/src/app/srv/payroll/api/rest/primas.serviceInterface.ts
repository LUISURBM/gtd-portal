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

import { RequestTPrimasDto } from '../model/models';
import { ResponseTListHashMapstringobject } from '../model/models';
import { ResponseTPrimasDto } from '../model/models';
import { ResponseTstring } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface PrimasServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete Prima in the system.
     * 
     * @param id Id Prima
     */
    deleteUsingDELETE66(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * find by id Prima in the system.
     * 
     * @param id Id Prima
     */
    findByIdUsingGET66(id: string, extraHttpRequestParams?: any): Observable<ResponseTPrimasDto>;

    /**
     * List all Prima in the system.
     * 
     * @param param param
     */
    listFindAllUsingGET42(param: string, extraHttpRequestParams?: any): Observable<ResponseTListHashMapstringobject>;

    /**
     * save a Prima in the system.
     * 
     * @param dto dto
     */
    saveUsingPOST66(dto: RequestTPrimasDto, extraHttpRequestParams?: any): Observable<ResponseTPrimasDto>;

    /**
     * update Prima in the system.
     * 
     * @param dto dto
     */
    updateUsingPUT66(dto: RequestTPrimasDto, extraHttpRequestParams?: any): Observable<ResponseTPrimasDto>;

}
