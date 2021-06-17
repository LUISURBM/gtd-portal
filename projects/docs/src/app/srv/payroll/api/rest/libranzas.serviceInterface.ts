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

import { RequestTLibranzasDto } from './dto/models';
import { ResponseTLibranzasDto } from './dto/models';
import { ResponseTListLibranzasDto } from './dto/models';
import { ResponseTstring } from './dto/models';


import { Configuration }                                     from '../configuration';



export interface LibranzasServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete Libranza in the system.
     *
     * @param id Id Libranza
     */
    deleteUsingDELETE54(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * find by id Libranza in the system.
     *
     * @param id Id Libranza
     */
    findByIdUsingGET54(id: string, extraHttpRequestParams?: any): Observable<ResponseTLibranzasDto>;

    /**
     * List all Libranza in the system.
     *
     * @param deduccionesId DeduccionesId
     */
    listFindAllUsingGET49(deduccionesId: string, extraHttpRequestParams?: any): Observable<ResponseTListLibranzasDto>;

    /**
     * save a Libranza in the system.
     *
     * @param dto dto
     */
    saveUsingPOST54(dto: RequestTLibranzasDto, extraHttpRequestParams?: any): Observable<ResponseTLibranzasDto>;

    /**
     * update Libranza in the system.
     *
     * @param dto dto
     */
    updateUsingPUT54(dto: RequestTLibranzasDto, extraHttpRequestParams?: any): Observable<ResponseTLibranzasDto>;

}
