
import Vue from "vue";
import { CircularChart3DPlugin, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";

Vue.use(CircularChart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-circularchart3d id="container" :tilt='tilt' :legendSettings='legendSettings'>
            <e-circularchart3d-series-collection>
                <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y' :dataLabel='dataLabel'></e-circularchart3d-series>
            </e-circularchart3d-series-collection>
        </ejs-circularchart3d>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Jan', y: 13, text: 'Jan: 13' }, 
        { x: 'Feb', y: 13, text: 'Feb: 13' },
        { x: 'Mar', y: 17, text: 'Mar: 17' }, 
        { x: 'Apr', y: 13.5, text: 'Apr: 13.5' }
      ],
      tilt: -45,
      legendSettings: {
        visible: false
      },
      dataLabel: {
        visible: true,
        name: 'text',
        template:  "<div id='templateWrap' style='background-color:#bd18f9;border-radius: 3px; float: right;padding: 2px;line-height: 20px;text-align: center;'>"+ "<img src='https://ej2.syncfusion.com/demos/src/chart/images/sunny.png' />" + "<div style='color:white; font-family:Roboto; font-style: medium; fontp-size:14px;float: right;padding: 2px;line-height: 20px;text-align: center;padding-right:6px'><span>${point.y}</span></div></div>"
      }
    };
  },
  provide: {
    circularchart3d: [PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D]
  }
});