import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent, ChartInterfaces } from 'ng-chartist';
import { BAR_CHART_1 } from './chart-values';
import { ChartType as GChartType } from 'angular-google-charts';
import { PayrollsService } from '../../../srv/payroll/rest/api';
import { StoredProcedureService } from '../../../srv/payroll/rest/api';
import { newArray } from '@angular/compiler/src/util';

declare var require: any;
const data= require('./data.json');


export interface Chart {
	type: ChartType;
	data: Chartist.IChartistData;
	options?: any;
	responsiveOptions?: any;
	events?: ChartEvent;
}

@Component({
  selector: 'app-payroll-overview-grap',
  templateUrl: './payroll-overview-grap.component.html',
  styleUrls: ['./payroll-overview-grap.component.css']
})
export class PayrollOverviewGrapComponent implements OnInit {

  type = GChartType.PieChart;
  data = [
     ['Indefinido', 45],
     ['Término fijo', 26],
     ['Obra o labor', 12],
     ['Prestación de servicios', 8],
     ['Aprendizaje', 8]
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {
    legend: { position: 'bottom', alignment: 'start' },
    width: '100%',
    height: '300px',
    backgroundColor: { fill:'transparent' }

  };
  width = 100;
  height = 300;

  constructor(
    private storedProcedureAPISrv: StoredProcedureService
  ) {

    const request: any = {
      body: {
        params: {
          businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E' as Object,
          grafica: '5B067D71-9EC0-4910-8D53-018850FDED4E' as Object,
        },
      },
      header: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
        esquema: 'payroll',
        procedimientoAlmacenado: 'ConsultaGraficosTest',
      },
    };

    storedProcedureAPISrv
      .exectuteProcedureUsingPOST1(request, 'events', true, {
        httpHeaderAccept: 'application/json',
      })
      .subscribe({
        next: (data:any) => {console.log(data);
        let newarray = data?.body?.body?.map?.((element: any) => {
          var key,
            keys = Object.keys(element), asArray = [];
          var n = keys.length;
          var newobj: any = {};
          while (n--) {
            key = keys[n];
            newobj[key.toLowerCase()] = element[key];
            asArray.push(key);
            asArray.push(element[key]);
          }
          return asArray;
        })??data;


          console.log(newarray);
          // this.data = newarray;
      },
        error: (err: any) => {
          console.log(err);
        }
      });
  }

  ngOnInit(): void {
  }

}
