import { Component, OnInit } from '@angular/core';
import { ChartType as GChartType } from 'angular-google-charts';
import * as Chartist from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

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
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540],
  ];
  columnNames = ['Year', 'Sales', 'Expenses'];
  options = {
    isStacked: true,
    hAxis: {
      title: 'Year',
    },
    width: 350,
    height: 350,
    backgroundColor: { fill:'transparent' }

  };
  width = 300;
  height = 400;

  constructor() {}

  ngOnInit(): void {}
}
