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

import { RequestTVacacionesComunesDto } from './dto/models';
import { ResponseTListVacacionesComunesDto } from './dto/models';
import { ResponseTVacacionesComunesDto } from './dto/models';
import { ResponseTstring } from './dto/models';


import { Configuration }                                     from '../configuration';



export interface VacacionesComunesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete Vacaciones Comun in the system.
     *
     * @param id Id Vacaciones Comun
     */
    deleteUsingDELETE73(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * find by id Vacaciones Comun in the system.
     *
     * @param id Id Vacaciones Comun
     */
    findByIdUsingGET73(id: string, extraHttpRequestParams?: any): Observable<ResponseTVacacionesComunesDto>;

    /**
     * List all Vacaciones Comun in the system.
     *
     */
    listFindAllUsingGET67(extraHttpRequestParams?: any): Observable<ResponseTListVacacionesComunesDto>;

    /**
     * save a Vacaciones Comun in the system.
     *
     * @param dto dto
     */
    saveUsingPOST73(dto: RequestTVacacionesComunesDto, extraHttpRequestParams?: any): Observable<ResponseTVacacionesComunesDto>;

    /**
     * update Vacaciones Comun in the system.
     *
     * @param dto dto
     */
    updateUsingPUT73(dto: RequestTVacacionesComunesDto, extraHttpRequestParams?: any): Observable<ResponseTVacacionesComunesDto>;

}
