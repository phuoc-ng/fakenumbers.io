/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import NumberType from './NumberType';

interface NumberMeta {
    name: string;
    description: string;
}

const NumberMetaMap: Map<NumberType, NumberMeta> = new Map([
    [ NumberType.Abn, { name: 'ABN', description: 'Australian Business Number' } ],
    [ NumberType.Acn, { name: 'ACN', description: 'Australian Company Number' } ],
    [ NumberType.Alv, { name: 'ALV', description: 'Finnish VAT number' } ],
    [ NumberType.Anum, { name: 'ANUM', description: 'Hungarian VAT number' } ],
    [ NumberType.Bic, { name: 'BIC', description: 'Business Identifier Code' } ],
    [ NumberType.Bn, { name: 'BN', description: 'Canadian Business Number' } ],
    [ NumberType.Btw, { name: 'BTW', description: 'Belgian VAT number' } ],
    [ NumberType.Cnpj, { name: 'CNPJ', description: 'Brazilian company identifier' } ],
    [ NumberType.Cpf, { name: 'CPF', description: 'Brazilian identification number' } ],
    [ NumberType.CreditCard, { name: 'Credit card', description: 'Credit Card Number' } ],
    [ NumberType.Cusip, { name: 'CUSIP', description: 'Committee on Uniform Security Identification Procedures' } ],
    [ NumberType.Cvv, { name: 'CVV', description: 'Card Verification Value' } ],
    [ NumberType.Ean, { name: 'EAN', description: 'International Article Number' } ],
    [ NumberType.Fpa, { name: 'FPA', description: 'Greek VAT number' } ],
    [ NumberType.Iban, { name: 'IBAN', description: 'International Bank Account Number' } ],
    [ NumberType.Imei, { name: 'IMEI', description: 'International Mobile Equipment Identity' } ],
    [ NumberType.Imo, { name: 'IMO', description: 'International Maritime Organization' } ],
    [ NumberType.Isbn, { name: 'ISBN', description: 'International Standard Book Number' } ],
    [ NumberType.Isin, { name: 'ISIN', description: 'International Securities Identification Number' } ],
    [ NumberType.Ismn, { name: 'ISMN', description: 'International Standard Music Number' } ],
    [ NumberType.Issn, { name: 'ISSN', description: 'International Standard Serial Number' } ],
    [ NumberType.Npi, { name: 'NPI', description: 'National Provider Identifier' } ],
    [ NumberType.Nif, { name: 'NIF', description: 'French tax identification number' } ],
    [ NumberType.Nric, { name: 'NRIC', description: 'Singaporean National Registration Identity Card' } ],
    [ NumberType.Rtn, { name: 'RTN', description: 'Routing Transit Number' } ],
    [ NumberType.Sedol, { name: 'SEDOL', description: 'Stock Exchange Daily Official List' } ],
    [ NumberType.Sin, { name: 'SIN', description: 'Canadian Social Insurance Number' } ],
    [ NumberType.Siren, { name: 'SIREN', description: '' } ],
    [ NumberType.Siret, { name: 'SIRET', description: '' } ],
    [ NumberType.Ssn, { name: 'SSN', description: 'Social Security Number' } ],
    [ NumberType.Svnr, { name: 'SVNR', description: 'Austrian social insurance number' } ],
    [ NumberType.Tfn, { name: 'TFN', description: 'Australian Tax File Number' } ],
    [ NumberType.Trn, { name: 'TRN', description: 'South African Tax Reference Number' } ],
    [ NumberType.Uid, { name: 'UID', description: 'Austrian VAT number' } ],
    [ NumberType.Vin, { name: 'VIN', description: 'Vehicle Identification Number' } ],
]);

export default NumberMetaMap;
