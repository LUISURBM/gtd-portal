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
import { PagoDto } from './pagoDto';
import { PeriodoDto } from './periodoDto';
import { TrabajadorDto } from './trabajadorDto';


export interface NominaIndividualCompleteDto { 
    codigoQr?: string;
    comprobanteTotal?: number;
    cuneNov: string;
    deduccionesId?: string;
    deduccionesTotal?: number;
    devengadosId?: string;
    devengadosTotal?: number;
    docNumber?: string;
    empleadorId?: string;
    id?: string;
    informacionGeneralId?: string;
    lugarGeneracionXmlId?: string;
    nominaGeneralId?: string;
    novedad: boolean;
    numeroSecuenciaXmlId?: string;
    pago?: PagoDto;
    periodo?: PeriodoDto;
    proveedorXmlId?: string;
    redondeo?: number;
    subscriptionId?: string;
    trabajador?: TrabajadorDto;
}

