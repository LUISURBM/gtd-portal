import { ValuesCatalog } from "./srv/in-mem-data-service";
import { NgGtdThemes, ValueOption } from "./types/common-types";

export function formatToDate(date:string): Date {
  return new Date(date);
}

export const VALUES_CATALOG: ValuesCatalog[] = [
  { id: 11, name: 'DR', code: '11DR', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 12, name: 'Narco', code: '12NA', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 13, name: 'Bombasto', code: '13BO', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 14, name: 'Celeritas', code: '14CE', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 15, name: 'Magneta', code: '15MA', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 16, name: 'RubberMan', code: '16RU', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 17, name: 'Dynama', code: '17DY', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 18, name: 'Qr', code: '18DR', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 19, name: 'Magma', code: '19MA', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 20, name: 'Tornado', code: '20TO', catalog: 'VC', fecha: formatToDate('5/17/2021') }
];

export const VALUES_BUSINESS : ValuesCatalog[] = [
  { id: 11, name: 'cliente pruebas', code: '11DR', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 12, name: 'nestle de colombia s.a.', code: '12NA', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 13, name: 'asdf sdfasdf', code: '13BO', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 14, name: 'Americas', code: '14CE', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 15, name: 'Colanta', code: '15MA', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 16, name: 'Justo & Bueno', code: '16RU', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 17, name: 'Duitama', code: '17DY', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 18, name: 'Barcelona', code: '18DR', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 19, name: 'Malaga', code: '19MA', catalog: 'VC', fecha: formatToDate('5/17/2021') },
  { id: 20, name: 'Tiendas boyacenses', code: '20TO', catalog: 'VC', fecha: formatToDate('5/17/2021') }
];

export const THEMES_OPTIONS : ValueOption[] = [
  {
    "backgroundColor": "#F1F1F1",
    "buttonColor": "#f75c59",
    "headingColor": "#181818",
    "label": "FPI Skin",
    "value": "FPI Skin",
    "catalog": NgGtdThemes.FpiSkin,
    "alternate": NgGtdThemes.FpiSkinBlack
  },
  {
    "backgroundColor": "#fff",
    "buttonColor": "#ff4081",
    "headingColor": "#3f51b5",
    "label": "Unicorn",
    "value": "Unicorn",
    "catalog": NgGtdThemes.UnicornLightTheme,
    "alternate": NgGtdThemes.UnicornDarkTheme
  },
  {
    "backgroundColor": "#fafafa",
    "buttonColor": "#797979",
    "headingColor": "#cc33ca",
    "label": "Alt theme",
    "value": "Alt theme",
    "catalog": NgGtdThemes.AltTheme,
    "alternate": NgGtdThemes.AltThemeBlack
  },
  {
    "backgroundColor": "#303030",
    "buttonColor": "#d7d7d7",
    "headingColor": "#cc33ca",
    "label": "NE Skin",
    "value": "NE Skin",
    "catalog": NgGtdThemes.NeGtd,
    "alternate": NgGtdThemes.NeGtdBlack
  },
  {
    "backgroundColor": "#c1ccd7",
    "buttonColor": "#cc33ca",
    "headingColor": "#097df2",
    "label": "GTD Azul",
    "value": "GTD Azul",
    "catalog": NgGtdThemes.GtdBlueGrey,
    "alternate": NgGtdThemes.GtdBlueBlack
  },
  // init angular css themes
  {
    "backgroundColor": "#fff",
    "buttonColor": "#607d8b",
    "headingColor": "#7b1fa2",
    "label": "Deep purple Amber",
    "value": "Deep purple Amber",
    "catalog": NgGtdThemes.DeeppurpleAmber,
    "alternate": NgGtdThemes.PurpleGreen
  },
  {
    "backgroundColor": "#fff",
    "buttonColor": "#607d8b",
    "headingColor": "#3f51b5",
    "label": "Indigo Pink",
    "value": "Indigo Pink",
    "catalog": NgGtdThemes.IndigoPink,
    "alternate": NgGtdThemes.IndigoPink
  },
  {
    "backgroundColor": "#303030",
    "buttonColor": "#607d8b",
    "headingColor": "#e91e63",
    "label": "PinkBlue grey",
    "value": "PinkBlue grey",
    "catalog": NgGtdThemes.PinkBluegrey,
    "alternate": NgGtdThemes.PinkBluegrey
  },
  {
    "backgroundColor": "#303030",
    "buttonColor": "#607d8b",
    "headingColor": "#7b1fa2",
    "label": "Purple green",
    "value": "Purple green",
    "catalog": NgGtdThemes.PurpleGreen,
    "alternate": NgGtdThemes.DeeppurpleAmber
  },
];
