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

import { RequestTSancionDto } from './dto/models';
import { ResponseTListSancionDto } from './dto/models';
import { ResponseTSancionDto } from './dto/models';
import { ResponseTstring } from './dto/models';


import { Configuration }                                     from '../configuration';



export interface SancionesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete Sancion in the system.
     *
     * @param id Id Sancion
     */
    deleteUsingDELETE69(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * find by id Sancion in the system.
     *
     * @param id Id Sancion
     */
    findByIdUsingGET69(id: string, extraHttpRequestParams?: any): Observable<ResponseTSancionDto>;

    /**
     * List all Sancion in the system.
     *
     * @param deduccionesId DeduccionesId
     */
    listFindAllUsingGET64(deduccionesId: string, extraHttpRequestParams?: any): Observable<ResponseTListSancionDto>;

    /**
     * save a Sancion in the system.
     *
     * @param dto dto
     */
    saveUsingPOST69(dto: RequestTSancionDto, extraHttpRequestParams?: any): Observable<ResponseTSancionDto>;

    /**
     * update Sancion in the system.
     *
     * @param dto dto
     */
    updateUsingPUT69(dto: RequestTSancionDto, extraHttpRequestParams?: any): Observable<ResponseTSancionDto>;

}
