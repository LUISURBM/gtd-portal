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

import { RequestTDeduccionesDto } from '../model/models';
import { ResponseTDeduccionesCompleteDto } from '../model/models';
import { ResponseTDeduccionesDto } from '../model/models';
import { ResponseTstring } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface DeduccionesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete Deducciones in the system.
     * 
     * @param id Id Deducciones
     */
    deleteUsingDELETE45(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * Find Deducciones complete in the system by DevengadosId.
     * 
     * @param deduccionId DeduccionId
     */
    findAllDeduccionUsingGET1(deduccionId: string, extraHttpRequestParams?: any): Observable<ResponseTDeduccionesCompleteDto>;

    /**
     * find by id Deducciones in the system.
     * 
     * @param id Id Deducciones
     */
    findByIdUsingGET45(id: string, extraHttpRequestParams?: any): Observable<ResponseTDeduccionesDto>;

    /**
     * save a Deducciones in the system.
     * 
     * @param dto dto
     */
    saveUsingPOST45(dto: RequestTDeduccionesDto, extraHttpRequestParams?: any): Observable<ResponseTDeduccionesDto>;

    /**
     * update Deducciones in the system.
     * 
     * @param dto dto
     */
    updateUsingPUT45(dto: RequestTDeduccionesDto, extraHttpRequestParams?: any): Observable<ResponseTDeduccionesDto>;

}
