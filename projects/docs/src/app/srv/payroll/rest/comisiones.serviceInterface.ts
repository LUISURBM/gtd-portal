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

import { RequestTComisionDto } from '../model/models';
import { ResponseTComisionDto } from '../model/models';
import { ResponseTListComisionDto } from '../model/models';
import { ResponseTstring } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface ComisionesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete Comision in the system.
     * 
     * @param id Id Comision
     */
    deleteUsingDELETE43(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * find by id Comision in the system.
     * 
     * @param id Id Comision
     */
    findByIdUsingGET43(id: string, extraHttpRequestParams?: any): Observable<ResponseTComisionDto>;

    /**
     * List all Comision in the system.
     * 
     * @param devengadosId DevengadosId
     */
    listFindAllDevengadosUsingGET17(devengadosId: string, extraHttpRequestParams?: any): Observable<ResponseTListComisionDto>;

    /**
     * save a Comision in the system.
     * 
     * @param dto dto
     */
    saveUsingPOST43(dto: RequestTComisionDto, extraHttpRequestParams?: any): Observable<ResponseTComisionDto>;

    /**
     * update Comision in the system.
     * 
     * @param dto dto
     */
    updateUsingPUT43(dto: RequestTComisionDto, extraHttpRequestParams?: any): Observable<ResponseTComisionDto>;

}
