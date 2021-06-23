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
 * Model that represents a Customer of the invoice for SEND.
 */
export interface NewInvoiceCustomer { 
    city?: string;
    country?: string;
    subDivision?: string;
    /**
     * The identification type code of the customer.
     */
    idTypeCode: string;
    /**
     * The identification number of the customer.
     */
    identificationNumber: string;
    /**
     * The address line description.
     */
    addressLine: string;
    /**
     * The ISO 3166-1 country code. Colombia country code is: \'CO\'.
     */
    countryCode: string;
    /**
     * The ISO 3166-2 country subdivision code. If Colombia use DANE country subdivision code. Bogotá D.C DANE code is: \'11\'.
     */
    subDivisionCode: string;
    /**
     * The city code. If Colombia use DANE city code. Bogotá D.C DANE city code is: \'11001\'.
     */
    cityCode: string;
    /**
     * The email address of the contact.
     */
    emailContact: string;
    /**
     * The neighborhood of the contact address.
     */
    neighborhood: NewInvoiceCustomer.NeighborhoodEnum;
    /**
     * The store of the contact address.
     */
    store: NewInvoiceCustomer.StoreEnum;
    /**
     * Final consumer
     */
    consumidorFinal?: boolean;
    /**
     * The identification type id of the customer.
     */
    idType: string;
    /**
     * The person type code of the customer.
     */
    personTypeCode: string;
    /**
     * The business name of the customer.
     */
    businessName: NewInvoiceCustomer.BusinessNameEnum;
    /**
     * The first name of the customer.
     */
    firstName: NewInvoiceCustomer.FirstNameEnum;
    /**
     * The last name of the customer.
     */
    lastName: NewInvoiceCustomer.LastNameEnum;
    /**
     * The regime type code of the customer.
     */
    regimeTypeCode: string;
    /**
     * The DIV number of the customer.
     */
    divCode: NewInvoiceCustomer.DivCodeEnum;
    /**
     * The tax filer value.
     */
    taxFiler?: boolean;
    /**
     * Responsabilidad Fiscal
     */
    responsabilidadesFiscales: string;
}
export namespace NewInvoiceCustomer {
    export type NeighborhoodEnum = 'range[200]';
    export const NeighborhoodEnum = {
        Range200: 'range[200]' as NeighborhoodEnum
    };
    export type StoreEnum = 'range[200]';
    export const StoreEnum = {
        Range200: 'range[200]' as StoreEnum
    };
    export type BusinessNameEnum = 'range[100]';
    export const BusinessNameEnum = {
        Range100: 'range[100]' as BusinessNameEnum
    };
    export type FirstNameEnum = 'range[100]';
    export const FirstNameEnum = {
        Range100: 'range[100]' as FirstNameEnum
    };
    export type LastNameEnum = 'range[100]';
    export const LastNameEnum = {
        Range100: 'range[100]' as LastNameEnum
    };
    export type DivCodeEnum = 'range[5]';
    export const DivCodeEnum = {
        Range5: 'range[5]' as DivCodeEnum
    };
}


