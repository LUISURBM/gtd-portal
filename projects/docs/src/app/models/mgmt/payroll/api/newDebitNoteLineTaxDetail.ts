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
 * Model that represents a Tax Line Detail of the debit note for SEND.
 */
export interface NewDebitNoteLineTaxDetail { 
    /**
     * The total amount of the tax.
     */
    taxAmount: number;
    /**
     * The percent of the tax.
     */
    percent: number;
    /**
     * The tax rate for the category, expressed as a nominal value
     */
    perUnitAmount: number;
    /**
     * The code of the tax category.
     */
    taxCode: string;
    /**
     * The code of the retention concept
     */
    retentionCode?: string;
}

