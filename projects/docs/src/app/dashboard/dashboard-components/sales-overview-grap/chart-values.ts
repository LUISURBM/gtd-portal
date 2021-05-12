import { ChartType } from "ng-chartist";
import { Chart } from "./sales-overview-grap.component";

export const BAR_CHART_1 = {
  type: 'Bar' as ChartType,
  data: {
    "labels": ["Jan", "Feb", "Mar", "Apr"],
    "series": [[800000, 1200000, 1400000, 1300000],
    [200000, 400000, 500000, 300000],
    [100000, 200000, 400000, 600000]]
  },
  options: {
    seriesBarDistance: 15,
    high: 12,
    stackBars: true,
    axisX: {
      showGrid: false,
      offset: 20
    },
    axisY: {
      showGrid: true,
      offset: 40,
    },
    height: 360
  },

  responsiveOptions: [
    [
      'screen and (min-width: 640px)',
      {
        axisX: {
          labelInterpolationFnc: function(value: number,index: number): string {
            return index % 1 === 0 ? `${value}` : '';
          }
        }
      }
    ]
  ]
} as Chart;

export const BAR_CHART_0 = {
  type: 'Bar',
  data: {
    "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    "series": [[9, 4, 11, 7, 10, 12], [3, 2, 9, 5, 8, 10]]
  },
  options: {
    seriesBarDistance: 15,
    high: 12,

    axisX: {
      showGrid: false,
      offset: 20
    },
    axisY: {
      showGrid: true,
      offset: 40
    },
    height: 360
  },

  responsiveOptions: [
    [
      'screen and (min-width: 640px)',
      {
        axisX: {
          labelInterpolationFnc: function(value: number,index: number): string {
            return index % 1 === 0 ? `${value}` : '';
          }
        }
      }
    ]
  ]
}