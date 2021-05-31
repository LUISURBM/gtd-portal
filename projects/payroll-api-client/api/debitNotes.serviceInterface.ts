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

import { DebitNoteSent } from '../model/models';
import { NewDebitNote } from '../model/models';
import { ResourceOfBillingRange } from '../model/models';
import { ResponseEntityOfobject } from '../model/index';


import { Configuration }                                     from '../configuration';



export interface DebitNotesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * Returns list of all Billing Range of the Debit Note in the system.
     *
     */
    allBillingRangesUsingGET1(extraHttpRequestParams?: any): Observable<ResourceOfBillingRange>;

    /**
     * Find a DebitNote by docNumber in the system.
     *
     * @param docNumbers docNumbers
     */
    debitNoteListUsingGET(docNumbers: Array<string>, extraHttpRequestParams?: any): Observable<Array<ResponseEntityOfobject>>;

    /**
     * Returns list of all Billing Range of the debit note in the system.
     *
     */
    getBillingRangesUsingGET1(extraHttpRequestParams?: any): Observable<Array<ResponseEntityOfobject>>;

    /**
     * Send a Debit Note to prepare and send the document to DIAN. Reason: Change of value. DIAN debit note concept code &#x3D; 3.
     *
     * @param list list
     */
    sendListUsingPOST1(list: Array<NewDebitNote>, extraHttpRequestParams?: any): Observable<Array<ResponseEntityOfobject>>;

}
