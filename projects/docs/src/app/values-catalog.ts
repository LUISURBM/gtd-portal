import { ValuesCatalog,Trabajador } from "./srv/in-mem-data-service";

function formatToDate(date:string): Date {
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

export const VALUES_WORKER : Trabajador[] = [
  { id: 1, documento: 1037, codigo: 6969 ,nombre: 'John', otroNombre: 'Bayron', primerApellido: 'Ocampo', segundoApellido: 'Fonnegra' }
];

