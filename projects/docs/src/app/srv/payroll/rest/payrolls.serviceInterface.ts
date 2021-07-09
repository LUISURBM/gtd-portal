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
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from '../configuration';
import { ListNominaIndividualRequest } from '../model/models';

export interface PayrollsServiceInterface {
  defaultHeaders: HttpHeaders;
  configuration: Configuration;

  /**
   * Find a Payroll by docNumber in the system.
   *
   */
  payrollListUsingGET1(extraHttpRequestParams?: any): Observable<string>;

  /**
   * Send a Payroll to prepare and send the document to DIAN.
   *
   * @param list list
   */
  sendListUsingPOST4(
    list: ListNominaIndividualRequest,
    extraHttpRequestParams?: any
  ): Observable<Array<any>>;
}