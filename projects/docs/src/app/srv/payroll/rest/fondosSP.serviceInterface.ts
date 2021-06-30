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

import { RequestTFondoSpDto } from '../model/models';
import { ResponseTFondoSpDto } from '../model/models';
import { ResponseTstring } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface FondosSPServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete FondoSp in the system.
     * 
     * @param id Id FondoSp
     */
    deleteUsingDELETE49(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * find by id FondoSp in the system.
     * 
     * @param id Id FondoSp
     */
    findByIdUsingGET49(id: string, extraHttpRequestParams?: any): Observable<ResponseTFondoSpDto>;

    /**
     * save a FondoSp in the system.
     * 
     * @param dto dto
     */
    saveUsingPOST49(dto: RequestTFondoSpDto, extraHttpRequestParams?: any): Observable<ResponseTFondoSpDto>;

    /**
     * update FondoSp in the system.
     * 
     * @param dto dto
     */
    updateUsingPUT49(dto: RequestTFondoSpDto, extraHttpRequestParams?: any): Observable<ResponseTFondoSpDto>;

}
