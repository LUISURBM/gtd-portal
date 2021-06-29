import { Component, OnInit } from '@angular/core';
import { ChartType as GChartType } from 'angular-google-charts';
import * as Chartist from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';
import { StoredProcedureService } from '../../../srv/payroll/rest/api';

declare var require: any;
const data = require('./data.json');

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-payment-overview-grap',
  templateUrl: './payment-overview-grap.component.html',
  styleUrls: ['./payment-overview-grap.component.css'],
})
export class PaymentOverviewGrapComponent implements OnInit {
  type = GChartType.AreaChart;
  data = [
    ['2015', 930, 540, 900, 1890],
    ['2016', 1030, 399, 900, 1890],
    ['2017', 985, 500, 900, 1890],
    ['2018', 1000, 540, 900, 1890],
    ['2019', 1170, 560, 900, 1890],
    ['2020', 660, 1120, 900, 1890],
  ];
  columnNames = ['Corte', 'Devengados', 'Deducciones', 'Total nómina', 'Total vacaciones' ];
  options = {
    legend: { position: 'bottom', alignment: 'start' },
    isStacked: true,
    hAxis: {
      title: 'Year',
    },
    width: '100%',
    height: 350,
    backgroundColor: { fill:'transparent' }

  };
  width = 500;
  height = 500;

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
        procedimientoAlmacenado: 'ConsultaHistoricosTest',
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

  ngOnInit(): void {}
}
