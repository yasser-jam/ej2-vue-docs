
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data, changedData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid ref='grid' id='Grid' :dataSource='data'  :toolbar='toolbarOptions' height='272px'
       :allowPdfExport='true' :toolbarClick='toolbarClick'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='OrderDate' headerText='Order Date' type='date' :format='formatOptions' width=100></e-column>
          <e-column field='Freight' headerText='Freight' width=80></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      toolbarOptions: ['PdfExport'],
      formatOptions: { type: 'date', format: "EEE, MMM d, ''yy" }
    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
        this.$refs.grid.pdfExport();
      }
    }
  },
  provide: {
    grid: [Toolbar, PdfExport]
  }

});