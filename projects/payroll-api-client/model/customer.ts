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
import { CustomerParams } from './customerParams';
import { Address } from './address';
import { Contact } from './contact';


/**
 * Model that represents a Customer.
 */
export interface Customer { 
    errors?: Array<object>;
    /**
     * The database generated customer ID.
     */
    id?: string;
    /**
     * The business name of the customer. Required if PersonType is \'1\'.
     */
    businessName?: string;
    /**
     * The identification type of the customer.
     */
    idType?: string;
    /**
     * The identification type code of the customer.
     */
    idTypeCode?: string;
    /**
     * The identification number of the customer.
     */
    identificationNumber?: string;
    /**
     * The DIV number of the customer.
     */
    divCode?: string;
    /**
     * The first name of the customer. Required if PersonType is \'2\'.
     */
    firstName?: string;
    /**
     * The last name of the customer. Required if PersonType is \'2\'.
     */
    lastName?: string;
    /**
     * The person type of the customer.
     */
    personType?: string;
    /**
     * The person type code of the customer.
     */
    personTypeCode?: string;
    /**
     * The regime type of the customer.
     */
    regimeType?: string;
    /**
     * The regime type code of the customer.
     */
    regimeTypeCode?: string;
    /**
     * The addresses of the customer.
     */
    addresses?: Array<Address>;
    /**
     * The tax filer value.
     */
    taxFiler?: boolean;
    /**
     * The contacts of the customer.
     */
    contacts?: Array<Contact>;
    /**
     * The responsabilidades fiscales of the customer.
     */
    customerParams?: Array<CustomerParams>;
}

