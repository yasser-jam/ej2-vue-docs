import Vue from "vue";
import { ChartPlugin, PolarSeries, LineSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :pointRender='pointRender'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Polar' xName='x' yName='y' drawType='Line' width=2 :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 2005, y: 28 }, 
        { x: 2006, y: 25 },
        { x: 2007, y: 26 }, 
        { x: 2008, y: 27 },
        { x: 2009, y: 32 }, 
        { x: 2010, y: 35 }, 
        { x: 2011, y: 30 }
      ],
      primaryXAxis: {
        title: 'Year',
        minimum: 2005, 
        maximum: 2011, 
        interval: 1
      },
      primaryYAxis: {
        minimum: 0, 
        maximum: 40, 
        interval: 10,
        title: 'Efficiency',
        labelFormat: '{value}%'
      },
      title: "Efficiency of oil-fired power production",
      marker: { visible: true }
    };
  },
  provide: {
    chart: [PolarSeries, LineSeries]
  },
  methods: {
    pointRender: function (args) {
      if (args.point.index % 2 !== 0) {
        args.fill = '#ff6347';
      }
      else {
        args.fill = '#009cb8';
      }
    }
  }

});