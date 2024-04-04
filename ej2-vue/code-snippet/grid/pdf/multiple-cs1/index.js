
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data, employeeData } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
        <p><b>First Grid:</b></p>
        <ejs-grid ref='firstGrid' id='FirstGrid' :dataSource='firstData' :toolbar='toolbarOptions' :allowPdfExport='true' :exportGrids='exportGrids' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
            </e-columns>
        </ejs-grid>
        <p><b>Second Grid:</b></p>
        <ejs-grid ref='secondGrid' id='SecondGrid' :dataSource='secondData' :allowPdfExport='true'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
                <e-column field='FirstName' headerText='FirstName' width=100></e-column>
                <e-column field='LastName' headerText='Last Name' width=100></e-column>
                <e-column field='City' headerText='City' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      firstData: data,
      secondData: employeeData,
      toolbarOptions: ['PdfExport'],
      exportGrids: ['FirstGrid', 'SecondGrid'],
    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'FirstGrid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
        const appendPdfExportProperties = {
          multipleExport: { type: "AppendToPage", blankSpace: 10 }
        };
        this.$refs.firstGrid.pdfExport(appendPdfExportProperties, true);
      }
    }
  },
  provide: {
    grid: [Toolbar, PdfExport]
  }

});