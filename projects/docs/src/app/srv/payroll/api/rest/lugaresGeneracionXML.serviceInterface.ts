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

import { RequestTLugarGeneracionXmlDto } from '../model/models';
import { ResponseTListLugarGeneracionXmlDto } from '../model/models';
import { ResponseTLugarGeneracionXmlDto } from '../model/models';
import { ResponseTstring } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface LugaresGeneracionXMLServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete Lugar Generacion xml in the system.
     * 
     * @param id Id Lugar Generacion xml
     */
    deleteUsingDELETE56(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * find by id Lugar Generacion xml in the system.
     * 
     * @param id Id Lugar Generacion xml
     */
    findByIdUsingGET56(id: string, extraHttpRequestParams?: any): Observable<ResponseTLugarGeneracionXmlDto>;

    /**
     * List all Lugar Generacion xml in the system.
     * 
     */
    listFindAllUsingGET34(extraHttpRequestParams?: any): Observable<ResponseTListLugarGeneracionXmlDto>;

    /**
     * save a Lugar Generacion xml in the system.
     * 
     * @param dto dto
     */
    saveUsingPOST56(dto: RequestTLugarGeneracionXmlDto, extraHttpRequestParams?: any): Observable<ResponseTLugarGeneracionXmlDto>;

    /**
     * update Lugar Generacion xml in the system.
     * 
     * @param dto dto
     */
    updateUsingPUT56(dto: RequestTLugarGeneracionXmlDto, extraHttpRequestParams?: any): Observable<ResponseTLugarGeneracionXmlDto>;

}