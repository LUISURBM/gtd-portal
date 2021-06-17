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

import { RequestTPeriodoDto } from './dto/models';
import { ResponseTListHashMapstringobject } from './dto/models';
import { ResponseTPeriodoDto } from './dto/models';
import { ResponseTstring } from './dto/models';


import { Configuration }                                     from '../configuration';



export interface PeriodosServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete Periodo in the system.
     *
     * @param id Id Periodo
     */
    deleteUsingDELETE65(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * find by id Periodo in the system.
     *
     * @param id Id Periodo
     */
    findByIdUsingGET65(id: string, extraHttpRequestParams?: any): Observable<ResponseTPeriodoDto>;

    /**
     * List all Periodo in the system.
     *
     * @param param param
     */
    listFindAllUsingGET60(param: string, extraHttpRequestParams?: any): Observable<ResponseTListHashMapstringobject>;

    /**
     * save a Periodo in the system.
     *
     * @param dto dto
     */
    saveUsingPOST65(dto: RequestTPeriodoDto, extraHttpRequestParams?: any): Observable<ResponseTPeriodoDto>;

    /**
     * update Periodo in the system.
     *
     * @param dto dto
     */
    updateUsingPUT65(dto: RequestTPeriodoDto, extraHttpRequestParams?: any): Observable<ResponseTPeriodoDto>;

}
