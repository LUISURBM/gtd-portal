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

import { Product } from '../model/models';
import { ResponseEntityOfobject } from '../model/index';


import { Configuration }                                     from '../configuration';



export interface ProductsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * Delete a Product in the system.
     *
     * @param id id
     */
    deleteProductUsingDELETE(id: string, extraHttpRequestParams?: any): Observable<object>;

    /**
     * Add a new Product in the system.
     *
     * @param list list
     */
    newProductsUsingPOST(list: Array<Product>, extraHttpRequestParams?: any): Observable<Array<ResponseEntityOfobject>>;

    /**
     * Find a List of Products by a List of Codes in the system.
     * Also return a link to retrieve all products with rel products, a link to retrieve all its taxes with rel taxes.
     * @param codes codes
     */
    productListByCodeUsingGET(codes: Array<string>, extraHttpRequestParams?: any): Observable<Array<ResponseEntityOfobject>>;

    /**
     * Update a List of Products in the system. If a Product is not found by the given id, a new product will be created.
     *
     * @param list list
     */
    replaceProductsUsingPUT(list: Array<Product>, extraHttpRequestParams?: any): Observable<Array<ResponseEntityOfobject>>;

}
