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
import { Link } from './link';


export interface ResourceOfBillingRange { 
    links?: Array<Link>;
    /**
     * The note type of the billing range.
     */
    noteType?: string;
    /**
     * The preffix of the billing range.
     */
    prefix?: string;
}

