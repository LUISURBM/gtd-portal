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

import { RequestTNominaIndividualDto } from '../model/models';
import { ResponseTListHashMapstringobject } from '../model/models';
import { ResponseTNominaIndividualDto } from '../model/models';
import { ResponseTstring } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface NominasIndividualesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete Nomina Individual in the system.
     * 
     * @param id Id Nomina Individual
     */
    deleteUsingDELETE58(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * find by id Nomina Individual in the system.
     * 
     * @param id Id Nomina Individual
     */
    findByIdUsingGET58(id: string, extraHttpRequestParams?: any): Observable<ResponseTNominaIndividualDto>;

    /**
     * List all Nomina Individual in the system.
     * 
     * @param businessSubscriptionId businessSubscriptionId
     * @param nominaGeneralId nominaGeneralId
     */
    listFindAllUsingGET36(businessSubscriptionId: string, nominaGeneralId: string, extraHttpRequestParams?: any): Observable<ResponseTListHashMapstringobject>;

    /**
     * save a Nomina Individual in the system.
     * 
     * @param dto dto
     */
    saveUsingPOST58(dto: RequestTNominaIndividualDto, extraHttpRequestParams?: any): Observable<ResponseTNominaIndividualDto>;

    /**
     * update Nomina Individual in the system.
     * 
     * @param dto dto
     */
    updateUsingPUT58(dto: RequestTNominaIndividualDto, extraHttpRequestParams?: any): Observable<ResponseTNominaIndividualDto>;

}
