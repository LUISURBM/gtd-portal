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

import { RequestTProveedorXmlDto } from '../model/models';
import { ResponseTListHashMapstringobject } from '../model/models';
import { ResponseTProveedorXmlDto } from '../model/models';
import { ResponseTstring } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface ProveedoresXMLServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete Proveedor Xml in the system.
     * 
     * @param id Id Proveedor Xml
     */
    deleteUsingDELETE67(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * find by id Proveedor Xml in the system.
     * 
     * @param id Id Proveedor Xml
     */
    findByIdUsingGET67(id: string, extraHttpRequestParams?: any): Observable<ResponseTProveedorXmlDto>;

    /**
     * List all Proveedor Xml in the system.
     * 
     * @param param param
     */
    listFindAllUsingGET17(param: string, extraHttpRequestParams?: any): Observable<ResponseTListHashMapstringobject>;

    /**
     * save a Proveedor Xml in the system.
     * 
     * @param dto dto
     */
    saveUsingPOST67(dto: RequestTProveedorXmlDto, extraHttpRequestParams?: any): Observable<ResponseTProveedorXmlDto>;

    /**
     * update Proveedor Xml in the system.
     * 
     * @param dto dto
     */
    updateUsingPUT67(dto: RequestTProveedorXmlDto, extraHttpRequestParams?: any): Observable<ResponseTProveedorXmlDto>;

}
