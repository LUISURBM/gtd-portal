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

import { RequestTBasicoDto } from '../model/models';
import { ResponseTBasicoDto } from '../model/models';
import { ResponseTstring } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface BasicosServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete Básico in the system.
     * 
     * @param id Id Básico
     */
    deleteUsingDELETE39(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * find by id Básico in the system.
     * 
     * @param id Id Básico
     */
    findByIdUsingGET39(id: string, extraHttpRequestParams?: any): Observable<ResponseTBasicoDto>;

    /**
     * save a Básico in the system.
     * 
     * @param dto dto
     */
    saveUsingPOST39(dto: RequestTBasicoDto, extraHttpRequestParams?: any): Observable<ResponseTBasicoDto>;

    /**
     * update Básico in the system.
     * 
     * @param dto dto
     */
    updateUsingPUT39(dto: RequestTBasicoDto, extraHttpRequestParams?: any): Observable<ResponseTBasicoDto>;

}