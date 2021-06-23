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

import { RequestTSaludPensionSindicatoDto } from '../model/models';
import { ResponseTListHashMapstringobject } from '../model/models';
import { ResponseTListSaludPensionSindicatoDto } from '../model/models';
import { ResponseTSaludPensionSindicatoDto } from '../model/models';
import { ResponseTstring } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface SaludPensionSindicatosServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * delete Salud Pension Sindicato in the system.
     * 
     * @param id Id Salud Pension Sindicato
     */
    deleteUsingDELETE68(id: string, extraHttpRequestParams?: any): Observable<ResponseTstring>;

    /**
     * find by id Salud Pension Sindicato in the system.
     * 
     * @param id Id Salud Pension Sindicato
     */
    findByIdUsingGET68(id: string, extraHttpRequestParams?: any): Observable<ResponseTSaludPensionSindicatoDto>;

    /**
     * List all Salud Pension Sindicato in the system by DeduccionesId.
     * 
     * @param deduccionesId DeduccionesId
     */
    listFindAllDeduccionesUsingGET7(deduccionesId: string, extraHttpRequestParams?: any): Observable<ResponseTListSaludPensionSindicatoDto>;

    /**
     * List all Salud Pension Sindicato in the system.
     * 
     * @param deduccionesId DeduccionesId
     */
    listFindAllUsingGET44(deduccionesId: string, extraHttpRequestParams?: any): Observable<ResponseTListHashMapstringobject>;

    /**
     * save a Salud Pension Sindicato in the system.
     * 
     * @param dto dto
     */
    saveUsingPOST68(dto: RequestTSaludPensionSindicatoDto, extraHttpRequestParams?: any): Observable<ResponseTSaludPensionSindicatoDto>;

    /**
     * update Salud Pension Sindicato in the system.
     * 
     * @param dto dto
     */
    updateUsingPUT68(dto: RequestTSaludPensionSindicatoDto, extraHttpRequestParams?: any): Observable<ResponseTSaludPensionSindicatoDto>;

}
