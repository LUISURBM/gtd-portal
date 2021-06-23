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


/**
 * Model that represents an Invoice sent.
 */
export interface InvoiceSent { 
    errors?: Array<object>;
    /**
     * The document number of the invoice.
     */
    docNumber?: string;
    /**
     * The issue date of the invoice.
     */
    issueDate?: string;
    /**
     * The received date of the invoice request.
     */
    receivedDate?: string;
    /**
     * The payable amount of the invoice.
     */
    payableAmount?: number;
}
