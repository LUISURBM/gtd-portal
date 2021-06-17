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

import { RequestTTransporteDto } from './dto/models';
import { ResponseTListTransporteDto } from './dto/models';
import { ResponseTTransporteDto } from './dto/models';
import { ResponseTstring } from './dto/models';


import { Configuration }                                     from '../configuration';



export interface TransportesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete Transporte in the system.
     *
     * @param id Id Transporte
     */
    deleteUsingDELETE71(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * find by id Transporte in the system.
     *
     * @param id Id Transporte
     */
    findByIdUsingGET71(id: string, extraHttpRequestParams?: any): Observable<ResponseTTransporteDto>;

    /**
     * List all Transporte in the system.
     *
     * @param devengadosId DevengadosId
     */
    listFindAllUsingGET65(devengadosId: string, extraHttpRequestParams?: any): Observable<ResponseTListTransporteDto>;

    /**
     * save a Transporte in the system.
     *
     * @param dto dto
     */
    saveUsingPOST71(dto: RequestTTransporteDto, extraHttpRequestParams?: any): Observable<ResponseTTransporteDto>;

    /**
     * update Transporte in the system.
     *
     * @param dto dto
     */
    updateUsingPUT71(dto: RequestTTransporteDto, extraHttpRequestParams?: any): Observable<ResponseTTransporteDto>;

}
