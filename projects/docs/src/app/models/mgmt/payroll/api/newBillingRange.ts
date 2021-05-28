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
 * Model that represents a Billing Range of the invoice for SEND.
 */
export interface NewBillingRange { 
    /**
     * The initial value of the billing range.
     */
    initialRange: number;
    /**
     * The final value of the billing range.
     */
    finalRange: number;
    /**
     * The preffix of the billing range.
     */
    prefix?: string;
    /**
     * The resolution number of the billing range.
     */
    resolution: string;
}

