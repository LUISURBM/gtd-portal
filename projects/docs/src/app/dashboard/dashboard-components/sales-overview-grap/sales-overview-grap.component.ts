import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent, ChartInterfaces } from 'ng-chartist';
import { BAR_CHART_1 } from './chart-values';

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
  selector: 'app-sales-overview-grap',
  templateUrl: './sales-overview-grap.component.html',
  styleUrls: ['./sales-overview-grap.component.css']
})
export class SalesOverviewGrapComponent implements OnInit {

  barChart1: Chart;


  constructor() {
    this.barChart1 = BAR_CHART_1;

  }

  ngOnInit(): void {
  }

}
