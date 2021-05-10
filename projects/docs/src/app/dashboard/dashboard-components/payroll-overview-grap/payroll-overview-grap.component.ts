import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent, ChartInterfaces } from 'ng-chartist';
import { BAR_CHART_1 } from './chart-values';
import { ChartType as GChartType } from 'angular-google-charts';

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

  barChart1: Chart;
  type = GChartType.PieChart;
  data = [
     ['HHRR', 45.0],
     ['ID', 26.8],
     ['Infrastructura', 12.8],
     ['Comercial', 8.5],
     ['Soporte', 6.2],
     ['Others', 0.7]
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {
    width: '100%',
    height: '300px',
    backgroundColor: { fill:'transparent' }

  };
  width = 100;
  height = 300;

  constructor() {
    this.barChart1 = BAR_CHART_1;

  }

  ngOnInit(): void {
  }

}
