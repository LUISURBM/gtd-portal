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
import { HeaderResponse } from './headerResponse';
import { NumeroSecuenciaXmlDto } from './numeroSecuenciaXmlDto';


export interface ResponseTListNumeroSecuenciaXmlDto { 
    bodyDto?: Array<NumeroSecuenciaXmlDto>;
    headerResponse?: HeaderResponse;
}

