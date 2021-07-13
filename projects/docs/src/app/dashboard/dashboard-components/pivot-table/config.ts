import { PIVOT_DATA } from './data';

export const PIVOT_CFG = {
  dataSource: {
    data: PIVOT_DATA,
  },
  slice: {
    rows: [
      {
        uniqueName: 'Concepto',
        sort: 'asc',
      },
      {
        uniqueName: 'Category',
        sort: 'asc',
      },
      {
        uniqueName: 'Measures',
      },
    ],
    columns: [
      {
        uniqueName: 'Tipo',
        sort: 'asc',
      },
    ],
    measures: [
      {
        uniqueName: 'Pago',
        aggregation: 'sum',
        format: "currency"
      },
      {
        uniqueName: 'Cantidad',
        aggregation: 'sum',
        format: "currency"
      },
    ],
    expands: {
      expandAll: false,
      rows: [
        {
          tuple: ['Concepto.Devengado'],
        },
      ],
      columns: [
        {
          tuple: ['Category.Auxilio'],
        },
      ],
    },
    drills: {
      drillAll: false,
    },
  },
  options: {
    grid: {
      type: 'compact',
      title: '',
      showFilter: true,
      showHeaders: true,
      showTotals: true,
      showGrandTotals: 'on',
      showHierarchies: true,
      showHierarchyCaptions: true,
      showReportFiltersArea: true,
    },
    configuratorActive: false,
    configuratorButton: true,
    showAggregations: true,
    showCalculatedValuesButton: true,
    drillThrough: true,
    showDrillThroughConfigurator: true,
    sorting: 'on',
    datePattern: 'dd/MM/yyyy',
    dateTimePattern: 'dd/MM/yyyy HH:mm:ss',
    saveAllFormats: false,
    showDefaultSlice: true,
    defaultHierarchySortName: 'asc',
  },
  formats: [
    {
      name: '',
      thousandsSeparator: ' ',
      decimalSeparator: '.',
      decimalPlaces: 2,
      maxSymbols: 20,
      currencySymbol: '',
      currencySymbolAlign: 'left',
      nullValue: ' ',
      infinityValue: 'Infinity',
      divideByZeroValue: 'Infinity',
    },
  ],
} as WebDataRocks.Report;
