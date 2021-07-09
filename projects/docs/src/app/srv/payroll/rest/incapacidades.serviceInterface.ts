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

import { RequestTIncapacidadDto } from '../model/models';
import { ResponseTIncapacidadDto } from '../model/models';
import { ResponseTListIncapacidadDto } from '../model/models';
import { ResponseTstring } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface IncapacidadesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete Incapacidad in the system.
     * 
     * @param id Id Incapacidad
     */
    deleteUsingDELETE52(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * find by id Incapacidad in the system.
     * 
     * @param id Id Incapacidad
     */
    findByIdUsingGET52(id: string, extraHttpRequestParams?: any): Observable<ResponseTIncapacidadDto>;

    /**
     * List all Incapacidad in the system.
     * 
     * @param devengadosId DevengadosId
     */
    listFindAllDevengadosUsingGET21(devengadosId: string, extraHttpRequestParams?: any): Observable<ResponseTListIncapacidadDto>;

    /**
     * save a Incapacidad in the system.
     * 
     * @param dto dto
     */
    saveUsingPOST52(dto: RequestTIncapacidadDto, extraHttpRequestParams?: any): Observable<ResponseTIncapacidadDto>;

    /**
     * update Incapacidad in the system.
     * 
     * @param dto dto
     */
    updateUsingPUT52(dto: RequestTIncapacidadDto, extraHttpRequestParams?: any): Observable<ResponseTIncapacidadDto>;

}