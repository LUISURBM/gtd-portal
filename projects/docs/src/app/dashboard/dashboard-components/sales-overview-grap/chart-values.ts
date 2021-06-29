import { ChartType } from 'ng-chartist';
import { Chart } from './sales-overview-grap.component';

export const BAR_CHART_1 = {
  type: 'Bar' as ChartType,
  data: {
    labels: [
      'HHRR (12)',
      'ID (1)',
      'Infrastructura (7)',
      'Comercial (5)',
      'Soporte (3)',
      'Otros (8)',
    ],
    series: [
      [800000, 1200000, 1400000, 1300000, 90000, 9000],
      [200000, 400000, 500000, 300000, 90000, 9000],
      [100000, 200000, 400000, 600000, 90000, 9000],
    ],
  },
  options: {
    seriesBarDistance: 15,
    stackBars: true,
    axisX: {
      showGrid: false,
      offset: 60,
    },
    axisY: {
      showGrid: true,
      offset: 40,
    },
    height: 480
  },

  responsiveOptions: [
    [
      'screen and (min-width: 640px)',
      {
        axisX: {
          labelInterpolationFnc: function (
            value: number,
            index: number
          ): string {
            return index % 1 === 0 ? `${value}` : '';
          },
        },
      },
    ],
  ],
} as Chart;

export const BAR_CHART_0 = {
  type: 'Bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    series: [
      [9, 4, 11, 7, 10, 12],
      [3, 2, 9, 5, 8, 10],
    ],
  },
  options: {
    seriesBarDistance: 15,
    high: 12,

    axisX: {
      showGrid: false,
      offset: 60,
    },
    axisY: {
      showGrid: true,
      offset: 40,
    },
    height: 360,
  },

  responsiveOptions: [
    [
      'screen and (min-width: 640px)',
      {
        axisX: {
          labelInterpolationFnc: function (
            value: number,
            index: number
          ): string {
            return index % 1 === 0 ? `${value}` : '';
          },
        },
      },
    ],
  ],
};
