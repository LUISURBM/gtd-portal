import { MatTableDataSource } from "@angular/material/table";

export enum NgGtdThemes {
  FpiSkin           = 'fpi-skin-black',   FpiSkinBlack     = 'fpi-skin-alt',
  NeGtd             = 'default-theme',    NeGtdBlack       = 'default-theme-black',
  UnicornLightTheme = 'unicorn-theme',    UnicornDarkTheme = 'unicorn-dark-theme',
  AltTheme          = 'theme-alternate',  AltThemeBlack    = 'theme-alternate-black',
  GtdBlueGrey       = 'gtd-blue',         GtdBlueBlack     = 'gtd-blue-black',
  // init angular css themes
  DeeppurpleAmber = 'deeppurple-amber',
  IndigoPink      = 'indigo-pink',
  PinkBluegrey    = 'pink-bluegrey',
  PurpleGreen     = 'purple-green',
  // end angular css themes
};


export interface EnumObject {
  [enumValue: number]: string;
}

export function getEnumValues(e: EnumObject): string[] {
  return Object.keys(e).map((i:any) => e[i]);
}

export function getEnumKeyByEnumValue<T extends {[index:string]:string}>(myEnum:T, enumValue:string, predertermined:string = myEnum[0]):keyof T {
  let keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue);
  return keys.length > 0 ? keys[0] : predertermined;
}

export function getEnumValueByEnumKey<T extends {[index:string]:string}>(myEnum:T, enumKey:string, predertermined:string = myEnum[0]):keyof T {
  let keys = Object.keys(myEnum).filter(x => myEnum.name == enumKey);
  return keys.length > 0 ? myEnum[keys[0]] : predertermined;
}


export interface ValueOption {
  backgroundColor: string;
  buttonColor: string;
  headingColor: string;
  label: string;
  value: string;
  catalog: NgGtdThemes;
  alternate: NgGtdThemes;
}



export interface NgGtdDS {
  datasource: MatTableDataSource<any>;
  displayedColumns: string[];
}
