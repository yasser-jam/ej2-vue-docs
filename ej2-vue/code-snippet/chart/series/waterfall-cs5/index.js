
import Vue from "vue";
import { ChartPlugin, HistogramSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let chartData = [];
let points = [5.250, 7.750, 0, 8.275, 9.750, 7.750, 8.275, 6.250, 5.750,
  5.250, 23.000, 26.500, 27.750, 25.025, 26.500, 26.500, 28.025, 29.250, 26.750, 27.250,
  26.250, 25.250, 34.500, 25.625, 25.500, 26.625, 36.275, 36.250, 26.875, 40.000, 43.000,
  46.500, 47.750, 45.025, 56.500, 56.500, 58.025, 59.250, 56.750, 57.250,
  46.250, 55.250, 44.500, 45.525, 55.500, 46.625, 46.275, 56.250, 46.875, 43.000,
  46.250, 55.250, 44.500, 45.425, 55.500, 56.625, 46.275, 56.250, 46.875, 43.000,
  46.250, 55.250, 44.500, 45.425, 55.500, 46.625, 56.275, 46.250, 56.875, 41.000, 63.000,
  66.500, 67.750, 65.025, 66.500, 76.500, 78.025, 79.250, 76.750, 77.250,
  66.250, 75.250, 74.500, 65.625, 75.500, 76.625, 76.275, 66.250, 66.875, 80.000, 85.250,
  87.750, 89.000, 88.275, 89.750, 97.750, 98.275, 96.250, 95.750, 95.250
];
points.map((value) => {
  chartData.push({
    y: value
  });
});

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
          <ejs-chart id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :pointRender='pointRender'>
            <e-series-collection>
                <e-series type='Histogram' width=2 yName='y' :dataSource='dataSource' :binInterval='binInterval' :showNormalDistribution='showNormalDistribution' :columnWidth='columnWidth'> 
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      primaryXAxis: {
        minimum: 0, 
        maximum: 100
      },
      primaryYAxis: {
        minimum: 0, 
        maximum: 50, 
        interval: 10
      },
      dataSource: chartData,
      binInterval: 20,
      columnWidth: 0.99,
      showNormalDistribution: true
    };
  },
  provide: {
    chart: [HistogramSeries]
  },
  methods: {
    pointRender: function (args) {
      if (args.point.y >= 15) {
        args.fill = '#ff6347';
      } else {
        args.fill = '#009cb8';
      }
    }
  }

});