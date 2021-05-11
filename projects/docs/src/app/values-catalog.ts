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
    "backgroundColor": "#fff",
    "buttonColor": "##26c6da",
    "headingColor": "##607d8b",
    "label": "Deep Purple & Amber",
    "value": "deeppurple-amber",
    "catalog": NgGtdThemes.NeGtd
  },
  {
    "backgroundColor": "#fff",
    "buttonColor": "#ff4081",
    "headingColor": "#3f51b5",
    "label": "Indigo & Pink",
    "value": "indigo-pink",
    "catalog": NgGtdThemes.UnicornLightTheme
  },
  {
    "backgroundColor": "#303030",
    "buttonColor": "#607d8b",
    "headingColor": "#ff5722",
    "label": "Deep orange & Blue Grey",
    "value": "deeporange-bluegrey",
    "catalog": NgGtdThemes.UnicornDarkTheme
  },
  {
    "backgroundColor": "#fff",
    "buttonColor": "#607d8b",
    "headingColor": "#7b1fa2",
    "label": "Deep purple Amber",
    "value": "Deep purple Amber",
    "catalog": NgGtdThemes.DeeppurpleAmber
  },
  {
    "backgroundColor": "#fff",
    "buttonColor": "#607d8b",
    "headingColor": "#3f51b5",
    "label": "Indigo Pink",
    "value": "Indigo Pink",
    "catalog": NgGtdThemes.IndigoPink
  },
  {
    "backgroundColor": "#303030",
    "buttonColor": "#607d8b",
    "headingColor": "#e91e63",
    "label": "PinkBlue grey",
    "value": "PinkBlue grey",
    "catalog": NgGtdThemes.PinkBluegrey
  },
  {
    "backgroundColor": "#303030",
    "buttonColor": "#607d8b",
    "headingColor": "#7b1fa2",
    "label": "PurpleG reen",
    "value": "PurpleG reen",
    "catalog": NgGtdThemes.PurpleGreen
  },
  {
    "backgroundColor": "#fafafa",
    "buttonColor": "#797979",
    "headingColor": "#cc33ca",
    "label": "Alt theme",
    "value": "Alt theme",
    "catalog": NgGtdThemes.AltTheme
  },
  {
    "backgroundColor": "#303030",
    "buttonColor": "#d7d7d7",
    "headingColor": "#cc33ca",
    "label": "Alt theme black",
    "value": "Alt theme black",
    "catalog": NgGtdThemes.AltThemeBlack
  }
]
